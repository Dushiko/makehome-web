import { Resend } from "resend";
import { NextResponse } from "next/server";

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
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch (parseErr) {
      console.error("[contact] Invalid JSON body:", parseErr);
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

    const name = asTrimmedString(record.name ?? record.fullName);
    const company = asTrimmedString(record.agency);
    const email = asTrimmedString(record.email);
    const phone = asTrimmedString(record.phone);
    const location = asTrimmedString(record.location);
    const message = asTrimmedString(
      record.message ?? record.description ?? record.propertyDescription
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
      console.error("[contact] RESEND_API_KEY is not set");
      return NextResponse.json(
        { success: false, error: GENERIC_ERROR },
        { status: 503 }
      );
    }

    // `new Resend()` without a key throws and breaks `next build` if done at module load.
    const resend = new Resend(apiKey);

    const html = `
    <h2>Nová poptávka</h2>
    <p><b>Jméno:</b> ${escapeHtml(name)}</p>
    <p><b>Realitní kancelář:</b> ${escapeHtml(company)}</p>
    <p><b>Email:</b> ${escapeHtml(email)}</p>
    <p><b>Telefon:</b> ${escapeHtml(phone)}</p>
    <p><b>Místo:</b> ${escapeHtml(location)}</p>
    <p><b>Popis:</b> ${escapeHtml(message)}</p>
  `;

    const { data, error } = await resend.emails.send({
      from: "formular@makehome.cz",
      to: ["info@makehome.cz"],
      subject: "Nová poptávka z webu MAKE HOME",
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { success: false, error: GENERIC_ERROR },
        { status: 502 }
      );
    }

    if (!data?.id) {
      console.error("[contact] Resend returned no message id:", data);
      return NextResponse.json(
        { success: false, error: GENERIC_ERROR },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: GENERIC_ERROR },
      { status: 500 }
    );
  }
}
