"use client";

import { useMemo, useState } from "react";

type FormState = {
  playerFirst: string;
  playerLast: string;
  playerAge: string;
  guardianFirst: string;
  guardianLast: string;
  phone: string;
  whatsappOptIn: "Yes" | "No" | "";
  guardianEmail: string;
  programInterest: string;
  skillLevel: string;
  location: string;
  heardFrom: string;
};

const LOCATIONS = ["Ottawa", "Scarborough", "Markham", "Mississauga", "Brampton", "Pickering", "Oshawa", "Oakville"] as const;

const PROGRAMS = [
  "Skill Development",
  "House League",
  "Competitive Rep/AAU",
  "Private Training",
  "Not sure yet",
] as const;

const SKILL = ["Beginner", "Intermediate", "Advanced", "Rep/Club experience"] as const;

const HEARD = ["Flyer", "Instagram", "Facebook", "WhatsApp", "Mosque/Community", "Word of Mouth", "Other"] as const;

function InputLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-semibold text-white/90">{children}</label>;
}

export default function RegistrationPage() {
  const [form, setForm] = useState<FormState>({
    playerFirst: "",
    playerLast: "",
    playerAge: "",
    guardianFirst: "",
    guardianLast: "",
    phone: "",
    whatsappOptIn: "",
    guardianEmail: "",
    programInterest: "",
    skillLevel: "",
    location: "",
    heardFrom: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    return (
      form.playerFirst &&
      form.playerLast &&
      form.playerAge &&
      form.guardianFirst &&
      form.guardianLast &&
      form.phone &&
      form.whatsappOptIn &&
      form.guardianEmail &&
      form.programInterest &&
      form.skillLevel &&
      form.location &&
      form.heardFrom
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.error || "Submission failed.");

      setStatus("success");
      setForm({
        playerFirst: "",
        playerLast: "",
        playerAge: "",
        guardianFirst: "",
        guardianLast: "",
        phone: "",
        whatsappOptIn: "",
        guardianEmail: "",
        programInterest: "",
        skillLevel: "",
        location: "",
        heardFrom: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message ?? "Something went wrong.");
    }
  }

  return (
    <div className="bg-[rgb(245,247,246)]">
      {/* Header */}
      <section className="bg-[#0B1410]">
        <div className="container-x py-14">
          <div className="max-w-3xl">
            <div className="text-sm tracking-widest text-white/70">REGISTRATION</div>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white">
              Registration
            </h1>

            <p className="mt-4 text-white/80">
              <span className="font-semibold text-white">SIGN UP BELOW</span>
              <br />
              Please fill the general interest form and we will email you upcoming programs
              insha’Allah.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-sm font-semibold text-white">Ages</div>
                <div className="mt-1 text-white/80">Open to ages 4 to 18</div>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-sm font-semibold text-white">Locations</div>

                  <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-white/80 list-disc list-inside">
                    <li>Ottawa</li>
                    <li>Scarborough</li>
                    <li>Mississauga</li>
                    <li>Markham</li>
                    <li>Brampton</li>
                    <li>Pickering</li>
                    <li>Oshawa</li>
                    <li>Oakville</li>
                  </ul>
                </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="text-sm font-semibold text-white">
                Upcoming Spring/Summer 2026 Program Start Dates
              </div>
              <ul className="mt-3 space-y-2 text-white/85 text-sm">
                <li className="flex gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--primary))]" />
                  <span>
                    <span className="font-semibold text-white">
                      House League / Skill Development:
                    </span>{" "}
                    April 25th, 2026
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="container-x py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="rounded-2xl bg-white border border-black/5 shadow-sm overflow-hidden">
            <div className="border-b border-black/5 px-6 py-4">
              <div className="text-lg font-bold text-slate-900">General Interest Form</div>
              <div className="mt-1 text-sm text-slate-600">
                Fill this out once — we’ll follow up with schedules and registration links.
              </div>
            </div>

            <form onSubmit={onSubmit} className="p-6 space-y-5">
              {/* Player name */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Player First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    value={form.playerFirst}
                    onChange={(e) => setForm({ ...form, playerFirst: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                    placeholder="First"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Player Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    value={form.playerLast}
                    onChange={(e) => setForm({ ...form, playerLast: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                    placeholder="Last"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Player Age <span className="text-red-600">*</span>
                </label>
                <input
                  value={form.playerAge}
                  onChange={(e) => setForm({ ...form, playerAge: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                  placeholder="e.g., 12"
                />
                <div className="mt-1 text-xs text-slate-500">Ages 4–18</div>
              </div>

              {/* Guardian */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Guardian First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    value={form.guardianFirst}
                    onChange={(e) => setForm({ ...form, guardianFirst: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                    placeholder="First"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Guardian Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    value={form.guardianLast}
                    onChange={(e) => setForm({ ...form, guardianLast: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                    placeholder="Last"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                  placeholder="e.g., (613) 555-1234"
                />
              </div>

              {/* WhatsApp opt-in */}
              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Add to WhatsApp group for updates? <span className="text-red-600">*</span>
                </label>
                <div className="mt-2 flex gap-3">
                  {(["Yes", "No"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, whatsappOptIn: opt })}
                      className={[
                        "rounded-xl border px-4 py-2 text-sm font-semibold",
                        form.whatsappOptIn === opt
                          ? "border-[rgb(var(--primary))] bg-[rgb(var(--primary))]/15"
                          : "border-black/10 bg-white hover:bg-black/5",
                      ].join(" ")}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Guardian Email <span className="text-red-600">*</span>
                </label>
                <input
                  value={form.guardianEmail}
                  onChange={(e) => setForm({ ...form, guardianEmail: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                  placeholder="name@email.com"
                />
              </div>

              {/* Dropdowns */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Program Interest <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={form.programInterest}
                    onChange={(e) => setForm({ ...form, programInterest: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                  >
                    <option value="">Select Program</option>
                    {PROGRAMS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Player Experience/Skill Level <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={form.skillLevel}
                    onChange={(e) => setForm({ ...form, skillLevel: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                  >
                    <option value="">Select Skill Level</option>
                    {SKILL.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Location <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                  >
                    <option value="">Select Location</option>
                    {LOCATIONS.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                  <div className="mt-1 text-xs text-slate-500">Pick area nearest to you</div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    How did you hear about Sunnah Spot?{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={form.heardFrom}
                    onChange={(e) => setForm({ ...form, heardFrom: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
                  >
                    <option value="">Select one</option>
                    {HEARD.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Status */}
              {status === "success" ? (
                <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-900">
                  Submitted! We’ll reach out with upcoming programs insha’Allah.
                </div>
              ) : null}

              {status === "error" ? (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-900">
                  {errorMsg}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={!canSubmit || status === "submitting"}
                className={[
                  "w-full rounded-xl px-6 py-3 text-sm font-semibold",
                  !canSubmit || status === "submitting"
                    ? "bg-black/10 text-slate-500 cursor-not-allowed"
                    : "bg-[rgb(var(--primary))] text-black hover:bg-[rgb(var(--primary-dark))]",
                ].join(" ")}
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>

              <p className="text-xs text-slate-500">
                By submitting, you agree to be contacted about Sunnah Spot programs.
              </p>
            </form>
          </div>

          {/* Side card */}
          <aside className="rounded-2xl bg-white border border-black/5 shadow-sm p-6">
            <div className="text-sm tracking-widest text-slate-500">NOTES</div>
            <h2 className="mt-2 text-xl font-extrabold text-slate-900">
              Next Steps
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We will reach out via email with upcoming program announcements and registration links insha’Allah. If you opted into WhatsApp, we will also add you to the group for your area for faster updates and community connection. If you have any questions, feel free to email us at{" "}
              <a href="mailto:info@sunnahspot.com" className="text-[rgb(var(--primary))] hover:underline">
                info@sunnahspot.com
              </a>
            </p>
          </aside>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-[28px] border border-black/5 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <div className="max-w-2xl">
              <div className="text-sm tracking-widest text-slate-500">COMMUNITY</div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Join Your Local{" "}
                <span className="text-[rgb(var(--primary))]">WhatsApp Group</span>
              </h2>
              <p className="mt-3 text-slate-600">
                Want updates even faster? Join the Sunnah Spot WhatsApp group for your area to
                stay connected with announcements, training info, and upcoming programs.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="https://chat.whatsapp.com/D25mv7Pev48IjO823Ngruy?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/5 bg-[rgb(245,247,246)] p-6 transition hover:shadow-md"
              >
                <div className="text-lg font-bold text-slate-900">Ottawa Group</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  For families and players in the Ottawa area.
                </p>
                <div className="mt-4 inline-flex rounded-xl bg-[rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-black">
                  Join Ottawa
                </div>
              </a>

              <a
                href="https://chat.whatsapp.com/IMsDKatnnWoCLvJWdX94PM?mode=hq2tcli"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/5 bg-[rgb(245,247,246)] p-6 transition hover:shadow-md"
              >
                <div className="text-lg font-bold text-slate-900">GTA East Group</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  For Scarborough, Markham, Pickering, Oshawa, and nearby areas.
                </p>
                <div className="mt-4 inline-flex rounded-xl bg-[rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-black">
                  Join GTA East
                </div>
              </a>

              <a
                href="https://chat.whatsapp.com/CXPL5tMYJNgIWgOsH1XyFw?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/5 bg-[rgb(245,247,246)] p-6 transition hover:shadow-md"
              >
                <div className="text-lg font-bold text-slate-900">GTA West Group</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  For Mississauga, Brampton, Oakville, and nearby areas.
                </p>
                <div className="mt-4 inline-flex rounded-xl bg-[rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-black">
                  Join GTA West
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}