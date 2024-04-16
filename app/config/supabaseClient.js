import { createClient } from '@supabase/supabase-js';

const supabaseURL = 'https://tkrvfrbmagsceuchuloz.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrcnZmcmJtYWdzY2V1Y2h1bG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMTU3ODAsImV4cCI6MjAyODc5MTc4MH0.kJxHtKI3zI6LEWtLsyQydoUDN4-5tqUUyRTeL8bUU2U';

export const supabase = createClient(supabaseURL, supabaseAnonKey);
