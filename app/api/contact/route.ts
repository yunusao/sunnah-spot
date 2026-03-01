import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
};

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => {
    const m: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return m[c] ?? c;
  });
}

export async function POST(req: Request) {
  try {
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_TO_EMAIL ||
      !CONTACT_FROM_EMAIL
    ) {
      return NextResponse.json({ ok: false, error: "Missing server env vars" }, { status: 500 });
    }

    const body = (await req.json()) as Partial<ContactPayload>;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const topic = (body.topic ?? "Other").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (name.length > 120 || email.length > 160 || topic.length > 80 || message.length > 4000) {
      return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
    }

    // Note: secure true requires port 465
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `[Sunnah Spot] Contact: ${topic} — ${name}`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ""}
        <p><strong>Topic:</strong> ${esc(topic)}</p>
        <hr/>
        <p style="white-space: pre-wrap"><strong>Message:</strong><br/>${esc(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}