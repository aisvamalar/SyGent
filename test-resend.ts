import { Resend } from "resend";

// Test the Resend API key
const resend = new Resend(process.env.RESEND_API_KEY);

async function testResend() {
  console.log("Testing Resend API key...");
  console.log("API Key:", process.env.RESEND_API_KEY ? `${process.env.RESEND_API_KEY.substring(0, 10)}...` : "NOT SET");
  
  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vishw.fury@gmail.com",
      subject: "Test Email from SyGent",
      html: "<p>This is a test email to verify Resend configuration.</p>",
    });

    console.log("✅ Email sent successfully!");
    console.log("Result:", result);
  } catch (error) {
    console.error("❌ Email send failed:");
    console.error(error);
  }
}

testResend();
