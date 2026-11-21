import { Resend } from "resend";
import {
  generateInternalNotificationEmail,
  generateCustomerAcknowledgmentEmail,
} from "../email-templates";
import type { ContactFormInput } from "../schemas/contact-form.schema";

const resend = new Resend(process.env.RESEND_API_KEY);

// Default sender - update with your verified domain
// During development, you can use "onboarding@resend.dev" for testing
const SENDER_EMAIL = process.env.RESEND_SENDER_EMAIL || "onboarding@resend.dev";
const RECIPIENT_EMAIL = "vishwa.fury@gmail.com"; // Must match your Resend account email

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
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await emailFn();
      
      if (result.error) {
        throw new Error(result.error.message || "Email send failed");
      }

      return {
        success: true,
        emailId: result.data?.id,
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
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
  const html = generateInternalNotificationEmail(data);

  return sendEmailWithRetry(async () => {
    return await resend.emails.send({
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
  const html = generateCustomerAcknowledgmentEmail({ name });

  return sendEmailWithRetry(async () => {
    return await resend.emails.send({
      from: SENDER_EMAIL,
      to: email,
      subject: "We received your project enquiry!",
      html,
    });
  });
}
