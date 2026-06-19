import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Google SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: 'sivm0987@gmail.com',
    pass: 'fhip pfdf nopz rtxs',  // Google App Password
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, type } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const subject = type === 'gmail'
    ? `[airbox] New Gmail Add Request — ${name}`
    : `[airbox] New Demo Booking — ${name}`;

  const html = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#1e1e2e,#2d1f5e);padding:32px;text-align:center;">
        <h1 style="color:white;margin:0;font-size:22px;">✨ New Contact · airbox CRM</h1>
        <p style="color:#c4b5fd;margin:8px 0 0;font-size:14px;">${type === 'gmail' ? '📩 Add to Gmail Request' : '🎯 Demo Booking Request'}</p>
      </div>
      <div style="padding:32px;background:white;">
        <table style="width:100%;border-collapse:collapse;">
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:10px 0;color:#6b7280;font-size:13px;width:90px;">Name</td>
            <td style="padding:10px 0;font-weight:600;color:#111827;font-size:14px;">${name}</td>
          </tr>
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:10px 0;color:#6b7280;font-size:13px;">Email</td>
            <td style="padding:10px 0;font-weight:600;color:#111827;font-size:14px;">${email}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6b7280;font-size:13px;">Phone</td>
            <td style="padding:10px 0;font-weight:600;color:#111827;font-size:14px;">${phone || '—'}</td>
          </tr>
        </table>
        <div style="margin-top:24px;padding:20px;background:#f9fafb;border-radius:10px;border:1px solid #e5e7eb;">
          <p style="color:#374151;font-size:13px;font-weight:600;margin:0 0 10px;">Message</p>
          <p style="color:#4b5563;font-size:14px;line-height:1.75;margin:0;white-space:pre-line;">${message}</p>
        </div>
      </div>
      <div style="padding:16px 32px;background:#f3f4f6;text-align:center;">
        <p style="color:#9ca3af;font-size:12px;margin:0;">Sent via airboxcrm.com contact form</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"airbox CRM Website" <sivm0987@gmail.com>`,
      to: 'sivm0987@gmail.com',
      replyTo: email,
      subject,
      html,
    });

    res.json({ success: true });
  } catch (err: any) {
    console.error('Email send error:', err.message);
    res.status(500).json({ error: err.message || 'Failed to send email.' });
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`✅ API server running on http://localhost:${PORT}`);
});
