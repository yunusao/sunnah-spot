import Link from "next/link";

type Program = {
  title: string;
  description: string[];
  details: string[];
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
};

const PROGRAMS: Program[] = [
  {
    badge: "Basketball Development",
    title: "Basketball Development",
    description: [
      "Our Basketball Development program caters to players of all levels, from beginners to advanced.",
      "Beginners focus on dribbling, shooting, passing, and defense. Advanced sessions hone pick-and-roll execution, reading the defense, spacing, timing, and decision-making under pressure.",
      "We integrate regular scrimmages and games to give opportunities for live gameplay and allow players to apply their skills in a competitive environment.",
      "Coaches provide personalized feedback tailored to each player’s level. We also emphasize physical conditioning, mental toughness, teamwork, and sportsmanship—building confidence for the next level.",
    ],
    details: [
      "Boys ages 5–13",
      "8–12 week duration (depending on age and skill level)",
      "1–2 practices per week (depending on age and skill level)",
      "Sunnah Spot dri-fit performance t-shirt",
    ],
    ctaLabel: "Register",
    ctaHref: "/registration",
  },
  {
    badge: "Rep Team",
    title: "Competitive Rep Team",
    description: [
      "For players ready to take their skills to the next level, our Competitive Rep Team is built for high commitment and advanced development.",
      "Athletes compete against top teams in the region under seasoned coaching, focusing on advanced strategies, concepts, and a strong competitive mindset—while maintaining the joy and integrity of the game.",
    ],
    details: [
      "Boys U10–U19",
      "September to May (Fall/Winter) & May to August (Spring/Summer)",
      "2 leagues (OBL, CYBL, HoopCity, Coalition, IEM, MYBL)",
      "2–3 practices per week",
      "Team uniform (jersey and shorts)",
      "Exhibition games",
      "Tournaments",
    ],
    ctaLabel: "Tryouts / Register",
    ctaHref: "/registration",
  },
  {
    badge: "House League",
    title: "House League",
    description: [
      "Our House League program offers a welcoming environment for players of all levels to enjoy basketball while building strong fundamentals.",
      "Players participate in organized games and tournaments with referees, scorekeepers, and standings—competitive but supportive.",
      "Coaches guide each player’s growth on and off the court, promoting sportsmanship, fair play, brotherhood, and personal development.",
    ],
    details: [
      "Boys ages 13–18",
      "8–12 weeks",
      "1 game per week",
      "Sunnah Spot jersey (player name and number included)",
      "Scorekeepers, refs, playoffs, awards",
      "Three-point contest, skills competition, dunk contest",
    ],
    ctaLabel: "Register",
    ctaHref: "/registration",
  },
  {
    badge: "Private Training",
    title: "Private Training",
    description: [
      "Transform your game with private one-on-one or small group training sessions led by Coach Musa.",
      "Sessions are personalized to refine fundamentals, master advanced techniques, and improve basketball IQ—shooting mechanics, defensive strategy, and game understanding.",
      "Coach Musa also emphasizes mental toughness, leadership, and game readiness through specialized drills, simulations, and situational training.",
      "Contact us by email or phone for more info or to book a session.",
    ],
    details: [
      "1-on-1 or small group sessions",
      "Personalized training plan",
      "Skill + IQ + game-readiness focus",
      "Booking by email/phone",
    ],
    ctaLabel: "Contact to Book",
    ctaHref: "/contact",
  },
];

function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
      <div className="p-6">
        {program.badge ? (
          <div className="inline-flex items-center rounded-full bg-[rgb(var(--primary))]/15 px-3 py-1 text-xs font-semibold text-[rgb(var(--primary-dark))]">
            {program.badge}
          </div>
        ) : null}

        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
          {program.title}
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
          {program.description.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-[rgb(245,247,246)] p-4">
          <div className="text-sm font-bold text-slate-900">Program Details</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {program.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--primary))]" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={program.ctaHref}
            className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-black hover:bg-[rgb(var(--primary-dark))]"
          >
            {program.ctaLabel}
          </Link>

        </div>
      </div>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <div className="bg-[rgb(245,247,246)]">
      {/* Header */}
      <section className="bg-[#0B1410]">
        <div className="container-x py-14">
          <div className="max-w-2xl">
            <div className="text-sm tracking-widest text-white/70">PROGRAMS</div>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white">
              Basketball Programs for Every Level
            </h1>
            <p className="mt-4 text-white/80">
              From fundamentals to competitive play—training built on discipline, teamwork,
              and Islamic values.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-black hover:bg-[rgb(var(--primary-dark))]"
              >
                Register Now
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

      {/* Cards */}
      <section className="container-x py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {PROGRAMS.map((p) => (
            <ProgramCard key={p.title} program={p} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl bg-white border border-black/5 p-6 shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-bold text-slate-900">
              Not sure which program fits?
            </div>
            <div className="text-sm text-slate-600">
              Message us and we’ll recommend the best option based on age and level.
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 text-sm font-semibold text-black hover:bg-[rgb(var(--primary-dark))]"
          >
            Get Guidance
          </Link>
        </div>
      </section>
    </div>
  );
}