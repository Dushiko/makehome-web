"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-600";

type ContactFormProps = {
  submitClassName: string;
};

export function ContactForm({ submitClassName }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      agency: String(formData.get("agency") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      location: String(formData.get("location") ?? ""),
      propertyDescription: String(formData.get("propertyDescription") ?? ""),
      company_website: String(formData.get("company_website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: unknown = await res.json().catch(() => null);
      const message =
        data &&
        typeof data === "object" &&
        "error" in data &&
        typeof (data as { error: unknown }).error === "string"
          ? (data as { error: string }).error
          : null;

      if (!res.ok || !data || typeof data !== "object" || !("success" in data)) {
        setStatus("error");
        setErrorMessage(
          message ?? "Odeslání se nezdařilo. Zkuste to prosím znovu."
        );
        return;
      }

      if ((data as { success: boolean }).success) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
      setErrorMessage(
        message ?? "Odeslání se nezdařilo. Zkuste to prosím znovu."
      );
    } catch {
      setStatus("error");
      setErrorMessage("Chyba připojení. Zkuste to prosím znovu.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-black/[0.06] bg-[#FAF8F4] p-8 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.1)] sm:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-medium leading-relaxed text-neutral-800">
          Děkujeme, ozveme se vám co nejdříve.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
        >
          Odeslat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form
      className="relative space-y-6 rounded-2xl border border-black/[0.06] bg-[#FAF8F4] p-8 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.1)] sm:p-10"
      onSubmit={handleSubmit}
      noValidate
    >
      <div
        className="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
      >
        <label htmlFor="company_website">Web společnosti</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="fullName" className={labelClass}>
          Jméno a příjmení
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="agency" className={labelClass}>
          Realitní kancelář
        </label>
        <input
          id="agency"
          name="agency"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="location" className={labelClass}>
          Místo realizace stagingu
        </label>
        <input
          id="location"
          name="location"
          type="text"
          autoComplete="street-address"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="propertyDescription" className={labelClass}>
          Popis nemovitosti
        </label>
        <textarea
          id="propertyDescription"
          name="propertyDescription"
          rows={5}
          className={inputClass}
        />
      </div>

      {status === "error" && errorMessage ? (
        <p
          className="text-sm font-medium text-red-800"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className={`${submitClassName} w-full disabled:pointer-events-none disabled:opacity-60 sm:w-auto`}
      >
        {status === "loading" ? "Odesílám…" : "Odeslat poptávku"}
      </button>
    </form>
  );
}
