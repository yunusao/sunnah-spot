"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, Instagram } from "lucide-react";

function InfoCard({
  icon,
  title,
  value,
  href,
  hint,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  hint?: string;
}) {
  const content = (
    <div className="group h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 ease-out flex flex-col hover:-translate-y-1 hover:shadow-md hover:shadow-black/10 hover:scale-[1.01] active:scale-[0.99]">
      <div className="flex items-start gap-4">
        <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgb(var(--primary))]/15 text-[rgb(var(--primary-dark))] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-3deg]">
          {icon}
        </div>

        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-500">{title}</div>
          <div className="mt-1 text-lg font-extrabold text-slate-900 whitespace-nowrap">
            {value}
          </div>
          {hint ? <div className="mt-1 text-sm text-slate-600">{hint}</div> : null}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {content}
    </a>
  ) : (
    content
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      topic: String(fd.get("topic") ?? "Other"),
      message: String(fd.get("message") ?? ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
  setStatus("idle");
  const data = await res.json().catch(() => null);
  alert(data?.error ? `Failed: ${data.error}` : `Failed with ${res.status}`);
  return;
}

    setStatus("sent");
    form.reset();
    setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className="bg-[rgb(245,247,246)]">
      {/* Header */}
      <section className="bg-[#0B1410]">
        <div className="container-x py-14">
          <div className="max-w-2xl">
            <div className="text-sm tracking-widest text-white/70">CONTACT</div>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white">
              Get in Touch
            </h1>
            <p className="mt-4 text-white/80">
              Questions about training, programs, tryouts, or private sessions? Send a
              message and we’ll get back to you.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-black hover:bg-[rgb(var(--primary-dark))]"
              >
                Join Now
              </Link>
              <Link
                href="/programs"
                className="inline-flex justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-x py-14">
        {/* Cards (3) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          <InfoCard
            icon={<Mail />}
            title="Email"
            value="info@sunnahspot.com"
            href="mailto:info@sunnahspot.com"
            hint="Best for registration & program questions"
          />
          <InfoCard
            icon={<Phone />}
            title="Phone"
            value="(647) 545-0664"
            href="tel:+16475450664"
            hint="Replace with your real number"
          />
          <InfoCard
            icon={<Instagram />}
            title="Instagram"
            value="@sunnahspot"
            href="https://instagram.com/sunnahspot"
            hint="DMs welcome"
          />
        </div>

        {/* Form + Side panel */}
        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-xl font-extrabold text-slate-900">Send a message</div>
            <p className="mt-2 text-sm text-slate-600">
              Fill this out and we’ll reply as soon as possible.
            </p>

            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Full name</label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Phone (optional)
                  </label>
                  <input
                    name="phone"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                    placeholder="(###) ###-####"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Topic</label>
                  <select
                    name="topic"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                    defaultValue="Programs"
                  >
                    <option>Programs</option>
                    <option>Registration</option>
                    <option>Private Training</option>
                    <option>Tryouts</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                  placeholder="Tell us what you’re looking for…"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-black hover:bg-[rgb(var(--primary-dark))] disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Sent!"
                  : "Send Message"}
              </button>

              <div className="text-xs text-slate-500">
                By sending this, you agree to be contacted by Sunnah Spot about your inquiry.
              </div>
            </form>
          </div>

          {/* Side panel */}
          <div className="lg:col-span-2 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-lg font-extrabold text-slate-900">Quick answers</div>

            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div>
                <div className="font-bold text-slate-900">How do I register?</div>
                <div>
                  Use the Registration page to join programs and receive scheduling details.
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-900">What age groups do you train?</div>
                <div>
                  We currently offer programs for:
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Ages 4–7 (Fundamentals & Intro to Basketball)</li>
                    <li>Ages 9–13 (Development & Skill Building)</li>
                    <li>Ages 14+ (Advanced & Competitive Training)</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-900">Where are sessions held?</div>
                <div>
                  We run programs in Scarborough, Mississauga, and Ottawa. Exact locations are
                  shared after signup.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-white border border-black/5 p-6 shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-bold text-slate-900">Ready to get started?</div>
            <div className="text-sm text-slate-600">
              Join a program and we’ll send you the next steps.
            </div>
          </div>
          <Link
            href="/registration"
            className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 text-sm font-semibold text-black hover:bg-[rgb(var(--primary-dark))]"
          >
            Go to Registration
          </Link>
        </div>
      </section>
    </div>
  );
}