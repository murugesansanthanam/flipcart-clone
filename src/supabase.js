import { createClient } from '@supabase/supabase-js';

const supabase = createClient ('https://aewpwjrfqsrwwimfddji.supabase.co',
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFld3B3anJmcXNyd3dpbWZkZGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzk2NDksImV4cCI6MjAxNDY1NTY0OX0.0xkHIBu-u5drpdxkDlW4eL_yyvaJzLSLG2n0XpIivb4"
);

export default supabase;