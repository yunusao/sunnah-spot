import Image from "next/image";
import Link from "next/link";

type Coach = {
  name: string;
  role: string;
  bio: string;
  photo?: string; // /public path
  tags?: string[];
};

const COACHES: Coach[] = [
  {
    name: "Coach Musa",
    role: "Head Coach • Skills & Development",
    bio: "Coach Musa focuses on skill development, basketball IQ, and building confident players through disciplined training and mentorship.",
    photo: "/coaches/musaa.jpeg", // add later (or remove photo field)
    tags: ["Skill Development", "Private Training", "Basketball IQ"],
  },
  {
    name: "Coach (Add Name)",
    role: "Assistant Coach",
    bio: "Add a short 1–2 sentence bio here highlighting coaching focus, experience, and what players gain.",
    photo: "/images/coach-2.jpg",
    tags: ["Teamwork", "Defense", "Confidence"],
  },
  {
    name: "Coach (Add Name)",
    role: "Assistant Coach",
    bio: "Add a short 1–2 sentence bio here highlighting coaching focus, experience, and what players gain.",
    photo: "/images/coach-3.jpg",
    tags: ["Shooting", "Footwork", "Athleticism"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[rgb(var(--primary))]/15 px-3 py-1 text-xs font-semibold text-[rgb(var(--primary-dark))]">
      {children}
    </span>
  );
}

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
      {/* Photo */}
      <div className="relative h-56 w-full bg-black/5">
        {coach.photo ? (
          <Image
            src={coach.photo}
            alt={coach.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Coach photo coming soon
          </div>
        )}

        {/* subtle overlay for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xl font-extrabold text-slate-900">{coach.name}</div>
        <div className="mt-1 text-sm font-semibold text-slate-600">{coach.role}</div>

        <p className="mt-3 text-sm leading-6 text-slate-600">{coach.bio}</p>

        {coach.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {coach.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function CoachesPage() {
  return (
    <div className="bg-[rgb(245,247,246)]">
      {/* Header */}
      <section className="bg-[#0B1410]">
        <div className="container-x py-14">
          <div className="max-w-2xl">
            <div className="text-sm tracking-widest text-white/70">COACHES</div>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white">
              Meet Our Coaches
            </h1>
            <p className="mt-4 text-white/80">
              Strong coaching, strong character. Our staff supports youth development on and off
              the court in a halal, respectful environment.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-black hover:bg-[rgb(var(--primary-dark))]"
              >
                Join Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches grid */}
      <section className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((c) => (
            <CoachCard key={c.name} coach={c} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl bg-white border border-black/5 p-6 shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-bold text-slate-900">
              Want private training or tryouts info?
            </div>
            <div className="text-sm text-slate-600">
              Reach out and we’ll connect you with the right coach.
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 text-sm font-semibold text-black hover:bg-[rgb(var(--primary-dark))]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}