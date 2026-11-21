import type { ContactFormInput } from "./schemas/contact-form.schema";

interface EnquiryData extends ContactFormInput {
  enquiryId: string;
  submittedAt: string;
}

interface CustomerData {
  customerId: string;
  isNewCustomer: boolean;
  enquiryCount: number;
}

export function generateInternalNotificationEmail(
  data: EnquiryData,
  customerData: CustomerData
): string {
  const submissionDate = new Date(data.submittedAt);
  const formattedDate = submissionDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedTime = submissionDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const customerStatus = customerData.isNewCustomer
    ? `<span style="color: #10b981; font-weight: 600;">NEW CUSTOMER</span>`
    : `<span style="color: #3b82f6; font-weight: 600;">EXISTING CUSTOMER</span> (${customerData.enquiryCount} enquiries)`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Customer Enquiry – ${data.name} | SYGENT</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff; color: #1a1a1a;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb;">
          
          <!-- Header with Logo -->
          <tr>
            <td style="padding: 32px 40px 24px; border-bottom: 2px solid #1a1a1a;">
              <h1 style="margin: 0 0 8px; color: #1a1a1a; font-size: 28px; font-weight: 800; letter-spacing: 2px;">SYGENT</h1>
              <p style="margin: 0 0 12px; color: #6b7280; font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;">Building What's Next</p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Website: <a href="https://sygent.in" style="color: #1a1a1a; text-decoration: none;">https://sygent.in</a>
              </p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding: 32px 40px 16px;">
              <p style="margin: 0; color: #1a1a1a; font-size: 15px; line-height: 1.6;">
                Dear SYGENT Team,
              </p>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <p style="margin: 0 0 16px; color: #374151; font-size: 14px; line-height: 1.6;">
                A new customer enquiry has been received through the official SYGENT website.
              </p>
              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">
                Please find the customer information below.
              </p>
            </td>
          </tr>

          <!-- Customer Details Section -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <h3 style="margin: 0 0 16px; color: #1a1a1a; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid #1a1a1a; padding-bottom: 8px;">
                Customer Details
              </h3>
              <table role="presentation" style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
                <tr style="background-color: #f9fafb;">
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; font-weight: 600; width: 180px;">Customer ID:</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #1a1a1a; font-size: 13px; font-weight: 600;">${customerData.customerId}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; font-weight: 600;">Customer Status:</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; font-size: 13px;">${customerStatus}</td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; font-weight: 600;">Customer Name:</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #1a1a1a; font-size: 13px;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; font-weight: 600;">Email Address:</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${data.email}" style="color: #1a1a1a; text-decoration: underline; font-size: 13px;">${data.email}</a></td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; font-weight: 600;">Phone Number:</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb;"><a href="tel:${data.phone}" style="color: #1a1a1a; text-decoration: none; font-size: 13px;">${data.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; font-weight: 600;">Company Name:</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #1a1a1a; font-size: 13px;">${data.company || "N/A"}</td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; font-weight: 600;">Service Interested In:</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #1a1a1a; font-size: 13px;">${data.service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6b7280; font-size: 12px; font-weight: 600;">Enquiry Date:</td>
                  <td style="padding: 10px 12px; color: #1a1a1a; font-size: 13px;">${formattedDate} at ${formattedTime}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Enquiry Message Section -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <h3 style="margin: 0 0 16px; color: #1a1a1a; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid #1a1a1a; padding-bottom: 8px;">
                Enquiry Message
              </h3>
              <div style="background-color: #f9fafb; border-left: 3px solid #1a1a1a; padding: 16px; color: #374151; font-size: 13px; line-height: 1.6;">
                ${data.description.replace(/\n/g, "<br>")}
              </div>
            </td>
          </tr>

          <!-- Attachments Section -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <h3 style="margin: 0 0 16px; color: #1a1a1a; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid #1a1a1a; padding-bottom: 8px;">
                Attachments
              </h3>
              
              <!-- Enquiry Excel -->
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 12px; border-radius: 4px; margin-bottom: 12px;">
                <p style="margin: 0; color: #6b7280; font-size: 12px; font-family: 'Courier New', monospace;">
                  📎 <strong style="color: #1a1a1a;">Enquiry_${data.enquiryId}_${data.name.replace(/[^a-zA-Z0-9_-]/g, "_")}.xlsx</strong>
                </p>
                <p style="margin: 4px 0 0; color: #9ca3af; font-size: 11px;">
                  Detailed information for this specific enquiry
                </p>
              </div>
              
              <!-- Customer Database Excel -->
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 12px; border-radius: 4px;">
                <p style="margin: 0; color: #6b7280; font-size: 12px; font-family: 'Courier New', monospace;">
                  📎 <strong style="color: #1a1a1a;">SYGENT_Customer_Database.xlsx</strong>
                </p>
                <p style="margin: 4px 0 0; color: #9ca3af; font-size: 11px;">
                  Complete master customer database with all unique customers
                </p>
              </div>
              
              <p style="margin: 12px 0 0; color: #6b7280; font-size: 12px; line-height: 1.5; font-style: italic;">
                The customer database contains one row per unique customer email. New customers are added automatically, and existing customer records are updated without creating duplicate rows.
              </p>
            </td>
          </tr>

          <!-- Required Action Section -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <h3 style="margin: 0 0 16px; color: #1a1a1a; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid #1a1a1a; padding-bottom: 8px;">
                Required Action
              </h3>
              <p style="margin: 0 0 12px; color: #374151; font-size: 13px; line-height: 1.6;">
                Kindly review the enquiry and initiate the necessary follow-up with the customer.
              </p>
              <p style="margin: 0; color: #374151; font-size: 13px; line-height: 1.6;">
                Please ensure that subsequent communication and enquiry status are updated in the internal records.
              </p>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="margin: 0 0 4px; color: #1a1a1a; font-size: 13px; line-height: 1.5;">
                Thank you.
              </p>
              <p style="margin: 16px 0 0; color: #1a1a1a; font-size: 13px; line-height: 1.5;">
                Regards,
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px; color: #1a1a1a; font-size: 14px; font-weight: 700;">SYGENT – Administration</p>
              <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px;">
                Website: <a href="https://sygent.in" style="color: #1a1a1a; text-decoration: none;">https://sygent.in</a>
              </p>
              <p style="margin: 0 0 16px; color: #6b7280; font-size: 12px;">
                Email: noreply@sygent.in
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 11px; line-height: 1.5; font-style: italic;">
                This is an automatically generated internal notification. The attached customer database is confidential and intended solely for authorised SYGENT personnel.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateCustomerAcknowledgmentEmail(data: Pick<EnquiryData, "name">): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for reaching out to SYGENT!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff; color: #1a1a1a;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb;">
          
          <!-- Header with Logo -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; border-bottom: 2px solid #1a1a1a;">
              <h1 style="margin: 0 0 8px; color: #1a1a1a; font-size: 32px; font-weight: 800; letter-spacing: 2px;">SYGENT</h1>
              <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;">Building What's Next</p>
            </td>
          </tr>

          <!-- Status Badge -->
          <tr>
            <td style="padding: 32px 40px 0; text-align: center;">
              <div style="display: inline-block; background-color: #f3f4f6; padding: 8px 16px; border-radius: 4px; border: 1px solid #d1d5db;">
                <p style="margin: 0; color: #374151; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Enquiry Received</p>
              </div>
            </td>
          </tr>

          <!-- Main Title -->
          <tr>
            <td style="padding: 24px 40px 32px; text-align: center;">
              <h2 style="margin: 0; color: #1a1a1a; font-size: 24px; font-weight: 700; line-height: 1.3;">
                Thanks for reaching out!
              </h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="margin: 0 0 16px; color: #374151; font-size: 15px; line-height: 1.6;">
                Hi <strong style="color: #1a1a1a;">${data.name}</strong>,
              </p>
              <p style="margin: 0 0 16px; color: #374151; font-size: 15px; line-height: 1.6;">
                We've successfully received your enquiry. Thank you for considering SYGENT. We're excited to learn more about your idea.
              </p>
            </td>
          </tr>

          <!-- What Happens Next Section -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <div style="background-color: #f9fafb; border-left: 3px solid #1a1a1a; padding: 20px; border-radius: 2px;">
                <h3 style="margin: 0 0 16px; color: #1a1a1a; font-size: 14px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
                  What happens next?
                </h3>
                <ol style="margin: 0; padding-left: 20px; color: #374151; font-size: 14px; line-height: 1.7;">
                  <li style="margin-bottom: 8px;">Your enquiry has been received.</li>
                  <li style="margin-bottom: 8px;">Our team will review your requirements.</li>
                  <li>We'll contact you with the next steps.</li>
                </ol>
              </div>
            </td>
          </tr>

          <!-- Additional Info -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6; font-style: italic;">
                Have additional information to share? Simply reply to this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px; color: #1a1a1a; font-size: 16px; font-weight: 700;">SYGENT</p>
              <p style="margin: 0 0 12px; color: #6b7280; font-size: 13px; line-height: 1.5;">
                Turning ideas into intelligent digital experiences.
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Website: <a href="https://sygent.in" style="color: #1a1a1a; text-decoration: none;">https://sygent.in</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
