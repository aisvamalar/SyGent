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
      const errorMsg = result.error.errors[0]?.message || "Invalid form data";
      console.error("[ContactForm] ❌ Validation failed:", errorMsg);
      throw new Error(errorMsg);
    }
    console.log("[ContactForm] ✅ Validation passed");
    return result.data;
  })
  .handler(async ({ data, context }): Promise<SubmissionResult> => {
    console.log("[ContactForm] ========== NEW SUBMISSION ==========");
    console.log("[ContactForm] Data:", { name: data.name, email: data.email, company: data.company });
    
    try {
      // Rate limiting check (safely handle missing request context)
      const request = (context as any)?.request;
      const clientIP = getClientIP(request);
      
      console.log("[ContactForm] Client IP:", clientIP);
      
      if (isRateLimited(clientIP)) {
        console.log("[ContactForm] ⛔ Rate limit exceeded for IP:", clientIP);
        return {
          success: false,
          error: "Too many submissions. Please try again later.",
        };
      }

      console.log("[ContactForm] 💾 Attempting to save to Supabase...");

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
          status: "new",
        })
        .select("id, created_at")
        .single();

      if (dbError || !submission) {
        console.error("[ContactForm] ❌ Database error:", {
          message: dbError?.message,
          details: dbError?.details,
          hint: dbError?.hint,
          code: dbError?.code,
        });
        return {
          success: false,
          error: `Database error: ${dbError?.message || "Failed to save enquiry"}. Check Supabase credentials.`,
        };
      }

      const enquiryId = submission.id;
      const submittedAt = submission.created_at;

      console.log("[ContactForm] ✅ Saved to database. ID:", enquiryId);

      // Send emails (don't fail the submission if emails fail)
      try {
        console.log("[ContactForm] 📧 Sending internal notification...");
        
        const internalResult = await sendInternalNotification({
          ...data,
          enquiryId,
          submittedAt,
        });

        if (!internalResult.success) {
          console.error("[ContactForm] ⚠️ Internal email failed:", internalResult.error);
        } else {
          console.log("[ContactForm] ✅ Internal notification sent! Email ID:", internalResult.emailId);
        }

        console.log("[ContactForm] 📧 Sending customer acknowledgment...");

        const customerResult = await sendCustomerAcknowledgment(data.email, data.name);

        if (!customerResult.success) {
          console.error("[ContactForm] ⚠️ Customer email failed:", customerResult.error);
        } else {
          console.log("[ContactForm] ✅ Customer acknowledgment sent! Email ID:", customerResult.emailId);
        }
      } catch (emailError) {
        console.error("[ContactForm] ❌ Email error:", emailError instanceof Error ? emailError.message : String(emailError));
      }

      console.log("[ContactForm] ========== SUBMISSION COMPLETE ==========");
      return {
        success: true,
        enquiryId,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("[ContactForm] ❌ FATAL ERROR:", errorMessage);
      console.error("[ContactForm] Stack trace:", error instanceof Error ? error.stack : "No stack trace");
      
      return {
        success: false,
        error: `Submission failed: ${errorMessage}`,
      };
    }
  });
