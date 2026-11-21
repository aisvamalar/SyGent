import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/api";

export const Route = createAPIFileRoute("/api/test-env")({
  GET: async () => {
    // Check which environment variables are available (without exposing values)
    const envCheck = {
      RESEND_API_KEY: !!process.env.RESEND_API_KEY ? "✅ Set" : "❌ Missing",
      RESEND_SENDER_EMAIL: !!process.env.RESEND_SENDER_EMAIL ? "✅ Set" : "❌ Missing",
      SUPABASE_URL: !!process.env.SUPABASE_URL ? "✅ Set" : "❌ Missing",
      SUPABASE_PUBLISHABLE_KEY: !!process.env.SUPABASE_PUBLISHABLE_KEY ? "✅ Set" : "❌ Missing",
      VITE_SUPABASE_URL: !!process.env.VITE_SUPABASE_URL ? "✅ Set" : "❌ Missing",
      VITE_SUPABASE_PUBLISHABLE_KEY: !!process.env.VITE_SUPABASE_PUBLISHABLE_KEY ? "✅ Set" : "❌ Missing",
      
      // Show first few characters of API key to verify it's the right one
      RESEND_API_KEY_PREFIX: process.env.RESEND_API_KEY?.substring(0, 10) || "none",
      RESEND_SENDER_EMAIL_VALUE: process.env.RESEND_SENDER_EMAIL || "none",
    };

    return json(envCheck);
  },
});
