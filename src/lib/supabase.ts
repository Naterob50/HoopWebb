import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hzlmtwhfscwfxkjlhlrq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bG10d2hmc2N3ZnhramxobHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzMzY4MDYsImV4cCI6MjEwMDkxMjgwNn0.yg8UlWzoaAb-CA-bp3zplk36QZYUnzWKR-V8rcULlwU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
