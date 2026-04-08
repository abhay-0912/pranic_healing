const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendMail(to, subject, html) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return;
  }

  await transporter.sendMail({
    from: process.env.FROM_EMAIL || "no-reply@pranichealing.center",
    to,
    subject,
    html
  });
}

async function sendBookingConfirmation(userEmail, bookingDetails) {
  await sendMail(userEmail, "Booking Confirmed", `<p>Your booking is confirmed.</p><pre>${JSON.stringify(bookingDetails, null, 2)}</pre>`);
}

async function sendEnrollmentConfirmation(userEmail, courseDetails) {
  await sendMail(userEmail, "Enrollment Confirmed", `<p>Your enrollment is confirmed.</p><pre>${JSON.stringify(courseDetails, null, 2)}</pre>`);
}

async function sendAdminNewLead(leadDetails) {
  await sendMail(process.env.ADMIN_EMAIL, "New Contact Lead", `<pre>${JSON.stringify(leadDetails, null, 2)}</pre>`);
}

async function sendAdminNewBooking(bookingDetails) {
  await sendMail(process.env.ADMIN_EMAIL, "New Booking", `<pre>${JSON.stringify(bookingDetails, null, 2)}</pre>`);
}

module.exports = {
  sendBookingConfirmation,
  sendEnrollmentConfirmation,
  sendAdminNewLead,
  sendAdminNewBooking
};
