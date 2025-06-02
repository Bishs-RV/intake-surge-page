// supabaseClient.js
const SUPABASE_URL = 'https://jcwaisddthcmtoyqmrys.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impjd2Fpc2RkdGhjbXRveXFtcnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDMyMDcsImV4cCI6MjA2NDQ3OTIwN30.24C4lc7-mw4mutx4ErUhzuC3prLDaSPK9dx89lM0Uc4';
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
