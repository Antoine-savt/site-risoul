import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Les variables d'environnement Supabase sont manquantes ! Assurez-vous d'avoir configuré VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY.");
}

// Create a dummy client if creds are missing to prevent crash, but logging error
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createClient('https://placeholder.supabase.co', 'placeholder');
