import nodemailer from "nodemailer";

// Escape user input before putting it into the HTML email (prevents HTML injection)
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const text = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const line = (v, max) => text(v, max).replace(/[\r\n]+/g, " "); // single-line fields (no header injection)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};

  // Honeypot: real visitors never fill this hidden field. Pretend success for bots.
  if (body.website) return res.status(200).json({ success: true });

  const name = line(body.name, 100);
  const company = line(body.company, 120);
  const email = line(body.email, 150);
  const country = line(body.country, 80);
  const product = line(body.product, 80);
  const message = text(body.message, 3000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a valid name, email and message." });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("send-email: GMAIL_USER / GMAIL_APP_PASSWORD are not set");
    return res.status(500).json({ success: false, message: "Email service is not configured." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password, not the login password
    },
  });

  try {
    await transporter.sendMail({
      // Gmail only allows sending as the authenticated account, so the buyer goes in replyTo
      from: `"Adatama Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.GMAIL_USER,
      replyTo: { name: name.replace(/"/g, ""), address: email },
      subject: `New inquiry${product ? ` - ${product}` : ""} from ${name}`,
      text:
        `New inquiry from the Adatama website\n\n` +
        `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\n` +
        `Country: ${country || "-"}\nProduct: ${product || "General inquiry"}\n\n${message}`,
      html: `
        <h3>New inquiry from a potential buyer</h3>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Company:</strong> ${esc(company || "-")}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Country:</strong> ${esc(country || "-")}</p>
        <p><strong>Product:</strong> ${esc(product || "General inquiry")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${esc(message)}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("send-email failed:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
