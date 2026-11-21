
import { createClient } from "@supabase/supabase-js";

// Get environment variables with fallbacks and detailed logging
function getEnvVar(serverKey: string, clientKey: string): string {
  console.log(`[Supabase] Checking for env var: ${serverKey} or ${clientKey}`);
  
  // Try multiple ways to access environment variables for Vercel compatibility
  if (typeof process !== 'undefined' && process.env) {
    // Server-side (Node.js/Vercel Functions)
    const value = process.env[serverKey] || process.env[clientKey];
    if (value) {
      console.log(`[Supabase] ✅ Found ${serverKey} or ${clientKey} in process.env`);
      return value;
    }
  }
  
  // Client-side (Vite)
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    const value = import.meta.env[clientKey];
    if (value) {
      console.log(`[Supabase] ✅ Found ${clientKey} in import.meta.env`);
      return value;
    }
  }
  
  const error = `Missing required environment variable: ${serverKey} or ${clientKey}. Check Vercel environment variables.`;
  console.error(`[Supabase] ❌ ${error}`);
  throw new Error(error);
}

let supabaseUrl: string;
let supabaseKey: string;

try {
  supabaseUrl = getEnvVar('SUPABASE_URL', 'VITE_SUPABASE_URL');
  supabaseKey = getEnvVar('SUPABASE_PUBLISHABLE_KEY', 'VITE_SUPABASE_PUBLISHABLE_KEY');
  console.log('[Supabase] ✅ All environment variables loaded successfully');
} catch (error) {
  console.error('[Supabase] ❌ Failed to load environment variables:', error);
  throw error;
}

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
