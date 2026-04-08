const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const bookingsRoutes = require("./routes/bookings");
const coursesRoutes = require("./routes/courses");
const contactRoutes = require("./routes/contact");
const paymentsRoutes = require("./routes/payments");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL?.split(",") || ["http://localhost:3000"],
    credentials: true
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "pranic-healing-api" });
});

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/payments", paymentsRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
