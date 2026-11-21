import { o as __toESM } from "../_runtime.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as contactFormSchema } from "./contact-form.schema-BTUgNRo-.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as Resend } from "../_libs/resend.mjs";
import { t as require_excel } from "../_libs/exceljs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-form-CXK6WX1a.js
var import_excel = /* @__PURE__ */ __toESM(require_excel());
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var supabaseUrl = typeof process !== "undefined" ? process.env["SUPABASE_URL"] : "https://fpdgxszwmfmmzupqydij.supabase.co";
var supabaseKey = typeof process !== "undefined" ? process.env["SUPABASE_PUBLISHABLE_KEY"] : "sb_publishable_k06FkObnUSiXWQgBoqwK7w_ZPhXl_7m";
if (!supabaseUrl || !supabaseKey) throw new Error("Missing Supabase environment variables");
var supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		persistSession: false,
		autoRefreshToken: false,
		detectSessionInUrl: false
	},
	global: { headers: { "apikey": supabaseKey } }
});
function generateInternalNotificationEmail(data) {
	const submissionDate = new Date(data.submittedAt);
	const formattedDate = submissionDate.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	const formattedTime = submissionDate.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		timeZoneName: "short"
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
                      ${data.website ? `<a href="${data.website.startsWith("http") ? data.website : `https://${data.website}`}" target="_blank" style="color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">${data.website}</a>` : `<span style="color: #ffffff; font-size: 14px; font-weight: 500;">N/A</span>`}
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
                      © ${(/* @__PURE__ */ new Date()).getFullYear()} SyGent. Intelligence meets innovation.
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
function generateCustomerAcknowledgmentEmail(data) {
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
                      © ${(/* @__PURE__ */ new Date()).getFullYear()} SyGent. Intelligence meets innovation.
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
async function generateEnquiryExcel(data) {
	const workbook = new import_excel.default.Workbook();
	const worksheet = workbook.addWorksheet("Enquiry Details");
	worksheet.getColumn(1).width = 25;
	worksheet.getColumn(2).width = 50;
	const headerRow = worksheet.addRow(["Field", "Value"]);
	headerRow.font = { bold: true };
	headerRow.fill = {
		type: "pattern",
		pattern: "solid",
		fgColor: { argb: "FFD9D9D9" }
	};
	headerRow.border = {
		top: { style: "thin" },
		left: { style: "thin" },
		bottom: { style: "thin" },
		right: { style: "thin" }
	};
	worksheet.views = [{
		state: "frozen",
		ySplit: 1
	}];
	const formattedSubmittedAt = new Date(data.submittedAt).toLocaleString("en-US", {
		dateStyle: "full",
		timeStyle: "short"
	});
	[
		["Enquiry ID", data.enquiryId],
		["Customer Name", data.name],
		["Email", data.email],
		["Company", data.company || "N/A"],
		["Phone", data.phone],
		["Website", data.website || "N/A"],
		["Service", data.service],
		["Budget", data.budget || "N/A"],
		["Description", data.description],
		["Status", "New"],
		["Submitted At", formattedSubmittedAt]
	].forEach((rowData, index) => {
		const row = worksheet.addRow(rowData);
		row.getCell(1).font = { bold: true };
		row.eachCell((cell) => {
			cell.border = {
				top: { style: "thin" },
				left: { style: "thin" },
				bottom: { style: "thin" },
				right: { style: "thin" }
			};
		});
		if (index === 8) row.getCell(2).alignment = { wrapText: true };
	});
	const sanitizedName = data.name.replace(/[^a-zA-Z0-9_-]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
	const filename = `Enquiry_${data.enquiryId}_${sanitizedName}.xlsx`;
	return {
		buffer: Buffer.from(await workbook.xlsx.writeBuffer()),
		filename
	};
}
var resend = null;
try {
	const apiKey = process.env.RESEND_API_KEY || process.env.RESEND_KEY;
	if (!apiKey) console.error("❌ RESEND_API_KEY is not set!");
	else {
		resend = new Resend(apiKey);
		console.log("✅ Resend initialized successfully");
	}
} catch (error) {
	console.error("❌ Failed to initialize Resend:", error);
}
var SENDER_EMAIL = process.env.RESEND_SENDER_EMAIL || process.env.RESEND_FROM || "onboarding@resend.dev";
var RECIPIENT_EMAIL = "vishw.fury@gmail.com";
console.log("📧 Email config:", {
	senderEmail: SENDER_EMAIL,
	recipientEmail: RECIPIENT_EMAIL,
	resendConfigured: !!resend
});
async function sendEmailWithRetry(emailFn, maxRetries = 2) {
	if (!resend) {
		console.error("❌ Resend not configured - skipping email");
		return {
			success: false,
			error: "Email service not configured"
		};
	}
	let lastError = null;
	for (let attempt = 0; attempt <= maxRetries; attempt++) try {
		const result = await emailFn();
		if (result.error) throw new Error(result.error.message || "Email send failed");
		console.log("✅ Email sent successfully:", result.data?.id);
		return {
			success: true,
			emailId: result.data?.id
		};
	} catch (error) {
		lastError = error instanceof Error ? error : new Error(String(error));
		console.error(`❌ Email attempt ${attempt + 1} failed:`, lastError.message);
		if (attempt < maxRetries) await new Promise((resolve) => setTimeout(resolve, 1e3 * (attempt + 1)));
	}
	return {
		success: false,
		error: lastError?.message || "Email send failed after retries"
	};
}
async function sendInternalNotification(data) {
	if (!resend) return {
		success: false,
		error: "Email service not available"
	};
	const html = generateInternalNotificationEmail(data);
	let excelBuffer = null;
	let excelFilename = null;
	try {
		const excelResult = await generateEnquiryExcel(data);
		excelBuffer = excelResult.buffer;
		excelFilename = excelResult.filename;
	} catch (error) {
		console.error("Failed to generate Excel attachment:", error);
	}
	return sendEmailWithRetry(async () => {
		return await resend.emails.send({
			from: SENDER_EMAIL,
			to: RECIPIENT_EMAIL,
			subject: `🎉 New Project Enquiry – ${data.name}`,
			html,
			attachments: excelBuffer && excelFilename ? [{
				filename: excelFilename,
				content: excelBuffer,
				contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			}] : []
		});
	});
}
async function sendCustomerAcknowledgment(email, name) {
	if (!resend) return {
		success: false,
		error: "Email service not available"
	};
	const html = generateCustomerAcknowledgmentEmail({ name });
	return sendEmailWithRetry(async () => {
		return await resend.emails.send({
			from: SENDER_EMAIL,
			to: email,
			subject: "We received your project enquiry!",
			html
		});
	});
}
var submissionTracker = /* @__PURE__ */ new Map();
function getClientIP(request) {
	if (!request) return "unknown";
	try {
		const cfIP = request.headers.get("cf-connecting-ip");
		if (cfIP) return cfIP;
		const forwarded = request.headers.get("x-forwarded-for");
		if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
	} catch (error) {
		console.warn("Failed to get client IP:", error);
	}
	return "unknown";
}
function isRateLimited(ip) {
	const now = Date.now();
	const oneHour = 36e5;
	const maxSubmissions = 3;
	const recentTimestamps = (submissionTracker.get(ip) || []).filter((ts) => now - ts < oneHour);
	submissionTracker.set(ip, recentTimestamps);
	if (recentTimestamps.length >= maxSubmissions) return true;
	recentTimestamps.push(now);
	submissionTracker.set(ip, recentTimestamps);
	return false;
}
var submitContactForm$_createServerFn_handler = createServerRpc({
	id: "82d837babb1b42fb2153f7d8d449e1a15ef05107fd75fa8c3f03e3eddd02587d",
	name: "submitContactForm$",
	filename: "src/lib/actions/contact-form.ts"
}, (opts) => submitContactForm$.__executeServer(opts));
var submitContactForm$ = createServerFn({ method: "POST" }).validator((data) => {
	const result = contactFormSchema.safeParse(data);
	if (!result.success) throw new Error(result.error.errors[0]?.message || "Invalid form data");
	return result.data;
}).handler(submitContactForm$_createServerFn_handler, async ({ data, context }) => {
	console.log("📝 Contact form submission started");
	try {
		const request = context?.request;
		const clientIP = getClientIP(request);
		console.log("🔍 Client IP:", clientIP);
		if (isRateLimited(clientIP)) {
			console.log("⛔ Rate limit exceeded for IP:", clientIP);
			return {
				success: false,
				error: "Too many submissions. Please try again later."
			};
		}
		console.log("💾 Attempting to save to Supabase...");
		const { data: submission, error: dbError } = await supabase.from("contact_submissions").insert({
			name: data.name,
			email: data.email,
			company: data.company,
			phone: data.phone,
			website: data.website || null,
			service: data.service,
			description: data.description,
			budget: data.budget || null,
			status: "new"
		}).select("id, created_at").single();
		if (dbError || !submission) {
			console.error("❌ Database insertion failed:", dbError);
			return {
				success: false,
				error: "Failed to save your enquiry. Please try again."
			};
		}
		const enquiryId = submission.id;
		const submittedAt = submission.created_at;
		console.log("✅ Submission saved to database:", enquiryId);
		try {
			console.log("📧 Sending internal notification...");
			const internalResult = await sendInternalNotification({
				...data,
				enquiryId,
				submittedAt
			});
			if (!internalResult.success) console.error("❌ Failed to send internal notification:", internalResult.error);
			else console.log("✅ Internal notification sent to owner!");
			console.log("📧 Sending customer acknowledgment...");
			const customerResult = await sendCustomerAcknowledgment(data.email, data.name);
			if (!customerResult.success) console.error("❌ Failed to send customer acknowledgment:", customerResult.error);
			else console.log("✅ Customer acknowledgment sent to:", data.email);
		} catch (emailError) {
			console.error("❌ Email sending error:", emailError);
		}
		console.log("✅ Form submission completed successfully");
		return {
			success: true,
			enquiryId
		};
	} catch (error) {
		console.error("❌ Contact form submission error:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "An unexpected error occurred"
		};
	}
});
//#endregion
export { submitContactForm$_createServerFn_handler };
