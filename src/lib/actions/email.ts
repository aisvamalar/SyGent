import { Resend } from "resend";
import {
  generateInternalNotificationEmail,
  generateCustomerAcknowledgmentEmail,
} from "../email-templates";
import type { ContactFormInput } from "../schemas/contact-form.schema";
import { generateCustomerDatabaseExcel } from "../customer-database-excel";

// Initialize Resend with error handling
let resend: Resend | null = null;
let resendError: string | null = null;

try {
  const apiKey = process.env.RESEND_API_KEY || process.env.RESEND_KEY;
  console.log("[Email] Checking RESEND_API_KEY...");
  
  if (!apiKey) {
    resendError = "RESEND_API_KEY environment variable is not set in Vercel";
    console.error(`[Email] ❌ ${resendError}`);
  } else {
    resend = new Resend(apiKey);
    console.log("[Email] ✅ Resend initialized successfully with key:", apiKey.substring(0, 10) + "...");
  }
} catch (error) {
  resendError = `Failed to initialize Resend: ${error instanceof Error ? error.message : String(error)}`;
  console.error("[Email] ❌", resendError);
}

// Get sender email with validation
const SENDER_EMAIL = process.env.RESEND_SENDER_EMAIL || process.env.RESEND_FROM || "onboarding@resend.dev";
const RECIPIENT_EMAIL = "vishwa.fury@gmail.com";

console.log("[Email] Configuration:", {
  senderEmail: SENDER_EMAIL,
  recipientEmail: RECIPIENT_EMAIL,
  resendConfigured: !!resend,
  usesVerifiedDomain: SENDER_EMAIL !== "onboarding@resend.dev",
});

interface EmailData extends ContactFormInput {
  enquiryId: string;
  submittedAt: string;
}

interface CustomerData {
  customerId: string;
  isNewCustomer: boolean;
  enquiryCount: number;
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

export async function sendInternalNotification(
  data: EmailData,
  customerData: CustomerData | null
): Promise<EmailResult> {
  console.log("[Email] sendInternalNotification called");
  
  if (!resend) {
    const error = resendError || "Email service not configured - check RESEND_API_KEY";
    console.error("[Email] ❌", error);
    return { success: false, error };
  }

  // Generate HTML with customer data if available
  const html = customerData
    ? generateInternalNotificationEmail(data, customerData)
    : generateInternalNotificationEmail(data, {
        customerId: "N/A",
        isNewCustomer: false,
        enquiryCount: 0,
      });

  // Generate complete customer database Excel attachment
  let excelBuffer: Buffer | null = null;
  const excelFilename = "SYGENT_Customer_Database.xlsx";

  try {
    console.log("[Email] 📊 Generating customer database Excel...");
    excelBuffer = await generateCustomerDatabaseExcel();
    console.log("[Email] ✅ Customer database Excel generated:", excelFilename);
  } catch (error) {
    console.error("[Email] ⚠️ Failed to generate customer database Excel:", error);
    // Continue with email sending without attachment
  }

  return sendEmailWithRetry(async () => {
    console.log("[Email] Sending internal notification to:", RECIPIENT_EMAIL);
    return await resend!.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `New Customer Enquiry – ${data.name} | SYGENT`,
      html,
      attachments:
        excelBuffer
          ? [
              {
                filename: excelFilename,
                content: excelBuffer,
                contentType:
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              },
            ]
          : [],
    });
  });
}

export async function sendCustomerAcknowledgment(
  email: string,
  name: string
): Promise<EmailResult> {
  console.log("[Email] sendCustomerAcknowledgment called for:", email);
  
  if (!resend) {
    const error = resendError || "Email service not configured - check RESEND_API_KEY";
    console.error("[Email] ❌", error);
    return { success: false, error };
  }

  const html = generateCustomerAcknowledgmentEmail({ name });

  return sendEmailWithRetry(async () => {
    console.log("[Email] Sending customer acknowledgment to:", email);
    return await resend!.emails.send({
      from: SENDER_EMAIL,
      to: email,
      subject: "Thanks for reaching out to SYGENT!",
      html,
    });
  });
}
