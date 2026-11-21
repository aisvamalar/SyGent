import type { ContactFormInput } from "./schemas/contact-form.schema";

interface EnquiryData extends ContactFormInput {
  enquiryId: string;
  submittedAt: string;
}

export function generateInternalNotificationEmail(data: EnquiryData): string {
  const submissionDate = new Date(data.submittedAt);
  const formattedDate = submissionDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = submissionDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Enquiry - SyGent</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0a;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); border-radius: 12px; border: 1px solid #2a2a2a; overflow: hidden;">
          
          <!-- Header with SyGent Branding -->
          <tr>
            <td style="padding: 0;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; position: relative;">
                <div style="background: rgba(0,0,0,0.2); backdrop-filter: blur(10px); display: inline-block; padding: 12px 24px; border-radius: 8px; margin-bottom: 16px;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: 2px;">SyGent</h1>
                </div>
                <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 500; opacity: 0.95; letter-spacing: 0.5px;">Intelligence meets innovation</p>
              </div>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding: 32px 40px 16px;">
              <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600; line-height: 1.6;">
                Hey Team! 👋
              </p>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <p style="margin: 0; color: #e5e7eb; font-size: 15px; line-height: 1.6;">
                We've received a new project enquiry through our website. Here are the details!
              </p>
            </td>
          </tr>

          <!-- CUSTOMER INFORMATION -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <div style="background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 8px; padding: 24px;">
                <h3 style="margin: 0 0 20px; color: #667eea; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea; padding-bottom: 12px;">
                  Customer Information
                </h3>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600; width: 160px;">Full Name:</td>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600;">Email Address:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">${data.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600;">Company Name:</td>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${data.company || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600;">Phone Number:</td>
                    <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">${data.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600;">Website:</td>
                    <td style="padding: 8px 0;">
                      ${
                        data.website
                          ? `<a href="${data.website.startsWith("http") ? data.website : `https://${data.website}`}" target="_blank" style="color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">${data.website}</a>`
                          : `<span style="color: #ffffff; font-size: 14px; font-weight: 500;">N/A</span>`
                      }
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- PROJECT INFORMATION -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <div style="background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 8px; padding: 24px;">
                <h3 style="margin: 0 0 20px; color: #667eea; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea; padding-bottom: 12px;">
                  Project Information
                </h3>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600; width: 160px;">Requested Service:</td>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${data.service}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600;">Estimated Budget:</td>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${data.budget || "N/A"}</td>
                  </tr>
                </table>
                <div style="margin-top: 16px;">
                  <p style="margin: 0 0 8px; color: #9ca3af; font-size: 13px; font-weight: 600;">Project Description:</p>
                  <div style="background: #0f0f0f; border-left: 4px solid #667eea; padding: 16px; border-radius: 4px; color: #e5e7eb; font-size: 14px; line-height: 1.7;">
                    ${data.description.replace(/\n/g, "<br>")}
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <!-- ENQUIRY TRACKING -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <div style="background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 8px; padding: 24px;">
                <h3 style="margin: 0 0 20px; color: #667eea; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea; padding-bottom: 12px;">
                  Enquiry Tracking
                </h3>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600; width: 160px;">Unique Enquiry ID:</td>
                    <td style="padding: 8px 0; color: #667eea; font-size: 13px; font-family: 'Courier New', monospace; font-weight: 500;">${data.enquiryId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600;">Submission Date:</td>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${formattedDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600;">Submission Time:</td>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${formattedTime}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #9ca3af; font-size: 13px; font-weight: 600;">Current Status:</td>
                    <td style="padding: 8px 0;">
                      <span style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; padding: 6px 16px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">New</span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Closing Message -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border: 1px solid rgba(102, 126, 234, 0.3); border-radius: 8px; padding: 20px; text-align: center;">
                <p style="margin: 0; color: #e5e7eb; font-size: 15px; line-height: 1.6;">
                  Please review the enquiry and get in touch with the customer. This could be an exciting new collaboration! 🚀
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 0; background-color: #0f0f0f; border-top: 1px solid #2a2a2a;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 24px 40px; text-align: center;">
                    <p style="margin: 0 0 8px; color: #9ca3af; font-size: 12px; line-height: 1.6;">
                      This is an automated notification from your SyGent website contact form.
                    </p>
                    <p style="margin: 0; color: #6b7280; font-size: 11px;">
                      © ${new Date().getFullYear()} SyGent. Intelligence meets innovation.
                    </p>
                  </td>
                </tr>
              </table>
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
  <title>Thank You for Your Enquiry - SyGent</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0a;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); border-radius: 12px; border: 1px solid #2a2a2a; overflow: hidden;">
          
          <!-- Header with SyGent Branding -->
          <tr>
            <td style="padding: 0;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 40px; text-align: center; position: relative;">
                <div style="background: rgba(0,0,0,0.2); backdrop-filter: blur(10px); display: inline-block; padding: 12px 24px; border-radius: 8px; margin-bottom: 20px;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; letter-spacing: 2px;">SyGent</h1>
                </div>
                <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 500; opacity: 0.95; letter-spacing: 0.5px;">Intelligence meets innovation</p>
              </div>
            </td>
          </tr>

          <!-- Success Icon -->
          <tr>
            <td style="padding: 40px 40px 0; text-align: center;">
              <div style="display: inline-block; width: 80px; height: 80px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                <span style="font-size: 48px; line-height: 1;">✓</span>
              </div>
              <h2 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; line-height: 1.3;">
                We Received Your<br>Project Enquiry!
              </h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 32px 40px;">
              <div style="background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 8px; padding: 32px;">
                <p style="margin: 0 0 20px; color: #e5e7eb; font-size: 16px; line-height: 1.7;">
                  Hi <strong style="color: #ffffff;">${data.name}</strong>,
                </p>
                <p style="margin: 0 0 20px; color: #e5e7eb; font-size: 16px; line-height: 1.7;">
                  Thank you for reaching out to SyGent!
                </p>
                <p style="margin: 0 0 20px; color: #e5e7eb; font-size: 16px; line-height: 1.7;">
                  We've successfully received your project enquiry. Our team will carefully review your requirements and get back to you soon to discuss how we can bring your idea to life with the right technology.
                </p>
                <p style="margin: 0; color: #e5e7eb; font-size: 16px; line-height: 1.7;">
                  We're excited to explore this opportunity with you!
                </p>
              </div>
            </td>
          </tr>

          <!-- What Happens Next -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border: 1px solid rgba(102, 126, 234, 0.3); border-radius: 8px; padding: 24px;">
                <h3 style="margin: 0 0 16px; color: #667eea; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                  What Happens Next?
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: #e5e7eb; font-size: 14px; line-height: 1.8;">
                  <li style="margin-bottom: 8px;">Our team will review your project requirements</li>
                  <li style="margin-bottom: 8px;">We'll contact you within 24-48 hours</li>
                  <li style="margin-bottom: 8px;">We'll schedule a call to discuss your vision in detail</li>
                  <li>You'll receive a customized proposal for your project</li>
                </ul>
              </div>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <div style="border-top: 1px solid #2a2a2a; padding-top: 24px;">
                <p style="margin: 0 0 4px; color: #ffffff; font-size: 16px; font-weight: 600;">
                  Best regards,
                </p>
                <p style="margin: 0; color: #9ca3af; font-size: 16px; font-weight: 500;">
                  The SyGent Team
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 0; background-color: #0f0f0f; border-top: 1px solid #2a2a2a;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 24px 40px; text-align: center;">
                    <p style="margin: 0 0 8px; color: #9ca3af; font-size: 12px; line-height: 1.6;">
                      This is an automated confirmation email. Please do not reply to this message.
                    </p>
                    <p style="margin: 0; color: #6b7280; font-size: 11px;">
                      © ${new Date().getFullYear()} SyGent. Intelligence meets innovation.
                    </p>
                  </td>
                </tr>
              </table>
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
