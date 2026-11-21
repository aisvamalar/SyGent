
import { createClient } from "@supabase/supabase-js";

// Access environment variables - works in both server and client contexts
const supabaseUrl = typeof process !== 'undefined' 
  ? process.env['SUPABASE_URL'] 
  : import.meta.env.VITE_SUPABASE_URL;
  
const supabaseKey = typeof process !== 'undefined'
  ? process.env['SUPABASE_PUBLISHABLE_KEY']
  : import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
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
