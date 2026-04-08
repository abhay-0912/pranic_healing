const express = require("express");
const crypto = require("crypto");
const Razorpay = require("razorpay");

const router = express.Router();

const hasRazorpay = Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
const razorpay = hasRazorpay
  ? new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    })
  : null;

router.post("/create-order", async (req, res) => {
  if (!razorpay) {
    return res.status(503).json({ error: "Razorpay is not configured" });
  }

  try {
    const options = {
      amount: Number(req.body.amount) * 100,
      currency: "INR",
      receipt: req.body.receipt || `receipt_${Date.now()}`
    };
    const order = await razorpay.orders.create(options);
    return res.json({ order });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/verify", async (req, res) => {
  if (!hasRazorpay) {
    return res.status(503).json({ error: "Razorpay is not configured" });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const signatureBody = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(signatureBody).digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ error: "Invalid payment signature" });
  }

  return res.json({ verified: true, payment_id: razorpay_payment_id });
});

module.exports = router;
