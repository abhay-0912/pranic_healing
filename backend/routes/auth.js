const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/verify", authMiddleware, (req, res) => {
  res.json({ valid: true, user: req.user });
});

module.exports = router;
