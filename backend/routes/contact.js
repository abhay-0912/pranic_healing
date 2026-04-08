const express = require("express");
const supabaseAdmin = require("../services/supabaseAdmin");
const { sendAdminNewLead } = require("../services/emailService");

const router = express.Router();

router.post("/submit", async (req, res) => {
  if (!supabaseAdmin) {
    return res.status(503).json({ error: "Supabase admin client is not configured" });
  }

  const payload = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone || null,
    message: req.body.message,
    interest: req.body.interest || "general",
    source: req.body.source || "website",
    status: "new"
  };

  const { data, error } = await supabaseAdmin.from("contact_leads").insert(payload).select("*").single();
  if (error) return res.status(400).json({ error: error.message });

  await sendAdminNewLead(data);
  return res.status(201).json({ lead: data });
});

module.exports = router;
