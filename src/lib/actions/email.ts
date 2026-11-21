import { Resend } from "resend";
import {
  generateInternalNotificationEmail,
  generateCustomerAcknowledgmentEmail,
} from "../email-templates";
import type { ContactFormInput } from "../schemas/contact-form.schema";

// Initialize Resend with error handling
let resend: Resend | null = null;
try {
  const apiKey = process.env.RESEND_API_KEY || process.env.RESEND_KEY;
  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is not set!");
  } else {
    resend = new Resend(apiKey);
    console.log("✅ Resend initialized successfully");
  }
} catch (error) {
  console.error("❌ Failed to initialize Resend:", error);
}

// Default sender - update with your verified domain
// During development, you can use "onboarding@resend.dev" for testing
const SENDER_EMAIL = process.env.RESEND_SENDER_EMAIL || process.env.RESEND_FROM || "onboarding@resend.dev";
const RECIPIENT_EMAIL = "vishwa.fury@gmail.com"; // Must match your Resend account email

console.log("📧 Email config:", {
  senderEmail: SENDER_EMAIL,
  recipientEmail: RECIPIENT_EMAIL,
  resendConfigured: !!resend,
});

interface EmailData extends ContactFormInput {
  enquiryId: string;
  submittedAt: string;
}

interface EmailResult {
  success: boolean;
  error?: string;
  emailId?: string;
}

async function sendEmailWithRetry(
  emailFn: () => Promise<any>,
  maxRetries = 2
): Promise<EmailResult> {
  if (!resend) {
    console.error("❌ Resend not configured - skipping email");
    return {
      success: false,
      error: "Email service not configured",
    };
  }

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await emailFn();
      
      if (result.error) {
        throw new Error(result.error.message || "Email send failed");
      }

      console.log("✅ Email sent successfully:", result.data?.id);
      return {
        success: true,
        emailId: result.data?.id,
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.error(`❌ Email attempt ${attempt + 1} failed:`, lastError.message);
      
      // Don't retry on the last attempt
      if (attempt < maxRetries) {
        // Exponential backoff: wait 1s, then 2s
        await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    }
  }

  return {
    success: false,
    error: lastError?.message || "Email send failed after retries",
  };
}

export async function sendInternalNotification(data: EmailData): Promise<EmailResult> {
  if (!resend) {
    return { success: false, error: "Email service not available" };
  }

  const html = generateInternalNotificationEmail(data);

  return sendEmailWithRetry(async () => {
    return await resend!.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `New Website Enquiry – ${data.name}`,
      html,
    });
  });
}

export async function sendCustomerAcknowledgment(
  email: string,
  name: string
): Promise<EmailResult> {
  if (!resend) {
    return { success: false, error: "Email service not available" };
  }

  const html = generateCustomerAcknowledgmentEmail({ name });

  return sendEmailWithRetry(async () => {
    return await resend!.emails.send({
      from: SENDER_EMAIL,
      to: email,
      subject: "We received your project enquiry!",
      html,
    });
  });
}
