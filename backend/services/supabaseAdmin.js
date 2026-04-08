const { createClient } = require("@supabase/supabase-js");

const hasSupabase = Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);

const supabaseAdmin = hasSupabase
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false }
    })
  : null;

module.exports = supabaseAdmin;
