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
    name: "Musa Ahluwalia",
    role: "Director • Founder • Head Coach",
    bio: "Musa brings over a decade of playing and coaching experience. After converting to Islam at 14, he founded Sunnah Spot to help Muslim youth grow in the sport while strengthening their Muslim identity. Since 2019, he has coached 500+ Muslim youth across Ontario and helped many earn spots on top prep high school and university teams in Canada and the US.",
    photo: "/coaches/musaa.jpeg", // replace when you add it
    tags: ["Elite Development", "Leadership", "Muslim Youth Mentorship"],
  },
  {
    name: "Louis Moore",
    role: "Mississauga Coach",
    bio: "Louis played four years at Sheridan as the starting point guard, earning major accolades including All-Canadian and induction into the Sheridan Hall of Fame. He played overseas in Luxembourg and later ran BuildBelieveSucceed training. NCCP certified, he’s coached rep teams and developed athletes now playing at schools like TMU (Ryerson), McMaster, and Carleton.",
    photo: "/coaches/louis.jpeg",
    tags: ["Point Guard Skills", "Player Development", "NCCP Certified"],
  },
  {
    name: "Alham Khatol",
    role: "Scarborough Coach • Lead Assistant (GTA)",
    bio: "Alham brings extensive coaching experience and a strong competitive background. With 5+ years training and coaching youth through Sunnah Spot and community programs, he’s committed to developing talent and building a genuine love for the game—while still playing at a high level today.",
    photo: "/coaches/Alham.jpg",
    tags: ["Skill Training", "High-Level Coaching", "GTA Programs"],
  },
  {
    name: "Moktar Toukaleh",
    role: "Ottawa Coach • Rep Team Coach (U16)",
    bio: "Coach Moktar has 3+ years coaching in Ottawa and led the 2023–2024 Sunnah Spot U16 Boys competitive rep team. He understands the challenges Muslim youth face in elite sports and is known for strong leadership, clear communication, and building a supportive environment where players thrive on and off the court.",
    photo: "/logo.png", // replace when you add it
    tags: ["Rep Team Coaching", "Culture & Character", "Communication"],
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