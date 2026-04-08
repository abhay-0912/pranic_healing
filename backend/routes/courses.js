const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const supabaseAdmin = require("../services/supabaseAdmin");
const { sendEnrollmentConfirmation } = require("../services/emailService");

const router = express.Router();

function ensureSupabase(res) {
  if (!supabaseAdmin) {
    res.status(503).json({ error: "Supabase admin client is not configured" });
    return false;
  }
  return true;
}

router.get("/", async (_req, res) => {
  if (!ensureSupabase(res)) return;
  const { data, error } = await supabaseAdmin.from("courses").select("*").eq("active", true).order("id", { ascending: true });
  if (error) return res.status(400).json({ error: error.message });
  return res.json({ courses: data });
});

router.post("/enroll", authMiddleware, async (req, res) => {
  if (!ensureSupabase(res)) return;
  const payload = {
    user_id: req.user.id,
    course_id: req.body.course_id,
    status: "enrolled",
    payment_id: req.body.payment_id || null
  };

  const { data, error } = await supabaseAdmin.from("enrollments").insert(payload).select("*").single();
  if (error) return res.status(400).json({ error: error.message });

  await sendEnrollmentConfirmation(req.user.email, data);
  return res.status(201).json({ enrollment: data });
});

module.exports = router;
