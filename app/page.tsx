import Image from "next/image";
import Link from "next/link";
import { Volleyball as Basketball, BookOpen, Trophy } from "lucide-react";
import { Users, CalendarDays, ThumbsUp } from "lucide-react";

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border border-black/5 shadow-sm overflow-hidden transition hover:shadow-lg">
      {/* Marble texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "url('/textures/marble-light.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative px-6 py-5 bg-white/95 backdrop-blur flex items-center gap-4">
        {/* Icon */}
        <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]">
          {icon}
        </div>

        {/* Text */}
        <div>
          <div className="text-2xl font-extrabold text-slate-900">
            {value}
          </div>
          <div className="text-sm text-slate-600">{label}</div>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border border-black/5 shadow-sm overflow-hidden transition hover:shadow-lg">
      {/* Marble */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/marble-light.png')] bg-cover bg-center pointer-events-none" />

      <div className="relative p-6 bg-white/95 backdrop-blur flex flex-col h-full">
        {/* ICON */}
        <div className="mb-4 text-[rgb(var(--primary))]">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-slate-900">{title}</h3>

        <p className="mt-2 text-sm text-slate-600 leading-6 flex-grow">
          {description}
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex w-fit items-center rounded-xl bg-[rgb(var(--primary))] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[rgb(var(--primary-dark))] transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[rgb(245,247,246)]">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/hero.jpeg"
          alt="Sunnah Spot Training"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-emerald-800/50 to-emerald-500/50" />

        <div className="relative container-x h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-2xl leading-tight">
            The Spot For The{" "}
            <span className="text-[rgb(var(--primary))]">Soul</span>, Body &{" "}
            <span className="text-[rgb(var(--primary))]">Mind</span>
          </h1>

          <p className="mt-4 text-white/80 max-w-xl">
            Combining sports training with Islamic values for stronger bodies
            and souls.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/registration"
              className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-white hover:bg-[rgb(var(--primary-dark))] transition"
            >
              Join Now
            </Link>

            <Link
              href="/programs"
              className="inline-flex justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x -mt-16 relative z-10 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <StatCard value="150+" label="Active Members" icon={<Users size={24} strokeWidth={2.2} />} />
          <StatCard value="20+" label="Weekly Sessions" icon={<CalendarDays size={24} strokeWidth={2.2} />} />
          <StatCard value="95%" label="Parent Satisfaction" icon={<ThumbsUp size={24} strokeWidth={2.2} />} />
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container-x pb-20">
        <div className="max-w-2xl">
          <div className="text-sm tracking-widest text-slate-500">
            OUR PROGRAMS
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            <span className="text-[rgb(var(--primary))]">Empowering</span> the Youth
          </h2>
          <p className="mt-3 text-slate-600">
            We offer programs that nurture both physical and spiritual growth.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProgramCard
            title="Skill Development"
            description="Develop strong fundamentals, basketball IQ, and confidence through structured training."
            href="/programs"
            icon={<Basketball size={32} strokeWidth={2.2} />}
          />

          <ProgramCard
            title="Quran & Character"
            description="Integrating Islamic values, discipline, and character development alongside athletic training."
            href="/programs"
            icon={<BookOpen size={32} strokeWidth={2.2} />}
          />

          <ProgramCard
            title="Camps & Competition"
            description="Compete, grow, and challenge yourself in structured leagues and tournaments."
            href="/programs"
            icon={<Trophy size={32} strokeWidth={2.2} />}
          />
        </div>
      </section>
    </div>
  );
}