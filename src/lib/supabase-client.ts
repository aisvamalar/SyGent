
import { createClient } from "@supabase/supabase-js";

// Get environment variables with fallbacks
function getEnvVar(serverKey: string, clientKey: string): string {
  // Try multiple ways to access environment variables for Vercel compatibility
  if (typeof process !== 'undefined' && process.env) {
    // Server-side (Node.js/Vercel Functions)
    const value = process.env[serverKey] || process.env[clientKey];
    if (value) return value;
  }
  
  // Client-side (Vite)
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    const value = import.meta.env[clientKey];
    if (value) return value;
  }
  
  throw new Error(`Missing environment variable: ${serverKey} or ${clientKey}`);
}

const supabaseUrl = getEnvVar('SUPABASE_URL', 'VITE_SUPABASE_URL');
const supabaseKey = getEnvVar('SUPABASE_PUBLISHABLE_KEY', 'VITE_SUPABASE_PUBLISHABLE_KEY');

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: {
        'apikey': supabaseKey,
      },
    },
  }
);
