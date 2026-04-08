const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const supabaseAdmin = require("../services/supabaseAdmin");
const { sendAdminNewBooking, sendBookingConfirmation } = require("../services/emailService");

const router = express.Router();

function ensureSupabase(res) {
  if (!supabaseAdmin) {
    res.status(503).json({ error: "Supabase admin client is not configured" });
    return false;
  }
  return true;
}

router.post("/create", authMiddleware, async (req, res) => {
  if (!ensureSupabase(res)) return;
  const payload = {
    user_id: req.user.id,
    healer_id: req.body.healer_id,
    slot_id: req.body.slot_id,
    service_type: req.body.service_type,
    status: "pending",
    amount: req.body.amount || 0,
    session_type: req.body.session_type || "in_person",
    notes: req.body.notes || null
  };

  const { data, error } = await supabaseAdmin.from("bookings").insert(payload).select("*").single();
  if (error) return res.status(400).json({ error: error.message });

  if (payload.slot_id) {
    await supabaseAdmin.from("booking_slots").update({ is_available: false }).eq("id", payload.slot_id);
  }

  await sendBookingConfirmation(req.user.email, data);
  await sendAdminNewBooking(data);
  return res.status(201).json({ booking: data });
});

router.get("/slots", async (req, res) => {
  if (!ensureSupabase(res)) return;
  const { healer_id, date } = req.query;
  if (!healer_id || !date) {
    return res.status(400).json({ error: "healer_id and date are required" });
  }

  const from = new Date(`${date}T00:00:00.000Z`).toISOString();
  const to = new Date(`${date}T23:59:59.999Z`).toISOString();

  const { data, error } = await supabaseAdmin
    .from("booking_slots")
    .select("*")
    .eq("healer_id", healer_id)
    .eq("is_available", true)
    .gte("starts_at", from)
    .lte("starts_at", to)
    .order("starts_at", { ascending: true });

  if (error) return res.status(400).json({ error: error.message });
  return res.json({ slots: data });
});

router.post("/cancel", authMiddleware, async (req, res) => {
  if (!ensureSupabase(res)) return;
  const { booking_id } = req.body;
  const { data, error } = await supabaseAdmin
    .from("bookings")
    .update({ status: "cancelled" })
    .eq("id", booking_id)
    .eq("user_id", req.user.id)
    .select("*")
    .single();

  if (error) return res.status(400).json({ error: error.message });

  if (data?.slot_id) {
    await supabaseAdmin.from("booking_slots").update({ is_available: true }).eq("id", data.slot_id);
  }

  return res.json({ booking: data });
});

module.exports = router;
