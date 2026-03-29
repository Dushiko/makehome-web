import { Resend } from "resend";
import { NextResponse } from "next/server";

const SUBJECT = "Nová poptávka z webu MAKE HOME";
const FROM = "formular@makehome.cz";
const TO = "info@makehome.cz";

const GENERIC_ERROR = "Odeslání se nezdařilo. Zkuste to prosím znovu.";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Neplatná žádost." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { success: false, error: "Neplatná žádost." },
      { status: 400 }
    );
  }

  const record = body as Record<string, unknown>;
  const honeypot = asTrimmedString(record.company_website);
  if (honeypot.length > 0) {
    return NextResponse.json({ success: true });
  }

  const name = asTrimmedString(
    record.name ?? record.fullName
  );
  const agency = asTrimmedString(record.agency);
  const email = asTrimmedString(record.email);
  const phone = asTrimmedString(record.phone);
  const location = asTrimmedString(record.location);
  const description = asTrimmedString(
    record.description ?? record.propertyDescription
  );

  if (!name) {
    return NextResponse.json(
      { success: false, error: "Vyplňte prosím jméno." },
      { status: 400 }
    );
  }

  if (!email) {
    return NextResponse.json(
      { success: false, error: "Vyplňte prosím e-mail." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Neplatná e-mailová adresa." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY is missing. Add it to .env.local (local) or your host’s environment variables."
    );
    return NextResponse.json(
      { success: false, error: GENERIC_ERROR },
      { status: 503 }
    );
  }

  const display = (v: string) => (v.length > 0 ? v : "—");

  const text = [
    SUBJECT,
    "",
    `Jméno: ${display(name)}`,
    `Realitní kancelář: ${display(agency)}`,
    `Email: ${email}`,
    `Telefon: ${display(phone)}`,
    `Místo: ${display(location)}`,
    "",
    "Popis:",
    display(description),
  ].join("\n");

  const html = `
    <h1 style="font-family:system-ui,sans-serif;font-size:18px;margin:0 0 16px;">${escapeHtml(SUBJECT)}</h1>
    <table style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;border-collapse:collapse;max-width:560px;">
      <tbody>
        <tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#555;"><strong>Jméno</strong></td><td style="padding:6px 0;vertical-align:top;">${escapeHtml(display(name))}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#555;"><strong>Realitní kancelář</strong></td><td style="padding:6px 0;vertical-align:top;">${escapeHtml(display(agency))}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#555;"><strong>Email</strong></td><td style="padding:6px 0;vertical-align:top;"><a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#555;"><strong>Telefon</strong></td><td style="padding:6px 0;vertical-align:top;">${escapeHtml(display(phone))}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#555;"><strong>Místo</strong></td><td style="padding:6px 0;vertical-align:top;">${escapeHtml(display(location))}</td></tr>
      </tbody>
    </table>
    <p style="font-family:system-ui,sans-serif;font-size:14px;margin:20px 0 8px;"><strong>Popis</strong></p>
    <p style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.55;margin:0;white-space:pre-wrap;">${escapeHtml(display(description))}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: SUBJECT,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { success: false, error: GENERIC_ERROR },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
