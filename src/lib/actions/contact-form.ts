import { createServerFn } from "@tanstack/react-start";
import { supabase } from "../supabase-client";
import { contactFormSchema, type ContactFormInput } from "../schemas/contact-form.schema";
import { sendInternalNotification, sendCustomerAcknowledgment } from "./email";

// Simple in-memory rate limiting (resets on server restart)
// In production, consider using Redis or a database
const submissionTracker = new Map<string, number[]>();

function getClientIP(request?: Request): string {
  if (!request) return "unknown";
  
  try {
    // Cloudflare Workers provides CF-Connecting-IP header
    const cfIP = request.headers.get("cf-connecting-ip");
    if (cfIP) return cfIP;

    // Fallback to x-forwarded-for
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  } catch (error) {
    console.warn("Failed to get client IP:", error);
  }

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  const maxSubmissions = 3;

  // Get submission timestamps for this IP
  const timestamps = submissionTracker.get(ip) || [];

  // Filter out submissions older than 1 hour
  const recentTimestamps = timestamps.filter((ts) => now - ts < oneHour);

  // Update the tracker
  submissionTracker.set(ip, recentTimestamps);

  // Check if rate limit exceeded
  if (recentTimestamps.length >= maxSubmissions) {
    return true;
  }

  // Record this submission
  recentTimestamps.push(now);
  submissionTracker.set(ip, recentTimestamps);

  return false;
}

interface SubmissionResult {
  success: boolean;
  error?: string;
  enquiryId?: string;
}

export const submitContactForm$ = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const result = contactFormSchema.safeParse(data);
    if (!result.success) {
      throw new Error(result.error.errors[0]?.message || "Invalid form data");
    }
    return result.data;
  })
  .handler(async ({ data, context }): Promise<SubmissionResult> => {
    try {
      // Rate limiting check (safely handle missing request context)
      const request = (context as any)?.request;
      const clientIP = getClientIP(request);
      if (isRateLimited(clientIP)) {
        return {
          success: false,
          error: "Too many submissions. Please try again later.",
        };
      }

      // Insert into Supabase
      const { data: submission, error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          website: data.website || null,
          service: data.service,
          description: data.description,
          budget: data.budget || null,
          status: "new", // Always set to 'new' on the server
        })
        .select("id, created_at")
        .single();

      if (dbError || !submission) {
        console.error("Database insertion failed:", dbError);
        return {
          success: false,
          error: "Failed to save your enquiry. Please try again.",
        };
      }

      const enquiryId = submission.id;
      const submittedAt = submission.created_at;

      // Send emails (don't fail the submission if emails fail)
      try {
        // Send internal notification to owner
        const internalResult = await sendInternalNotification({
          ...data,
          enquiryId,
          submittedAt,
        });

        if (!internalResult.success) {
          console.error("Failed to send internal notification:", internalResult.error);
        } else {
          console.log("✅ Internal notification sent to owner!");
        }

        // Send customer acknowledgment email
        const customerResult = await sendCustomerAcknowledgment(data.email, data.name);

        if (!customerResult.success) {
          console.error("Failed to send customer acknowledgment:", customerResult.error);
        } else {
          console.log("✅ Customer acknowledgment sent to:", data.email);
        }
      } catch (emailError) {
        // Log email errors but don't fail the submission
        console.error("Email sending error:", emailError);
      }

      // Return success - the enquiry is saved even if emails failed
      return {
        success: true,
        enquiryId,
      };
    } catch (error) {
      console.error("Contact form submission error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      };
    }
  });
