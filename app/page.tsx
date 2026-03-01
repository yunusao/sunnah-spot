"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Volleyball as Basketball, Trophy, Users as UsersIcon, Volume2, VolumeX } from "lucide-react";
import { Users, CalendarDays, ThumbsUp } from "lucide-react";
import { VIDEOS } from "@/data/videos"; // adjust if your path differs

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
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "url('/textures/marble-light.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative px-6 py-5 bg-white/95 backdrop-blur flex items-center gap-4">
        <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]">
          {icon}
        </div>

        <div>
          <div className="text-2xl font-extrabold text-slate-900">{value}</div>
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
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/marble-light.png')] bg-cover bg-center pointer-events-none" />

      <div className="relative p-6 bg-white/95 backdrop-blur flex flex-col h-full">
        <div className="mb-4 text-[rgb(var(--primary))]">{icon}</div>

        <h3 className="text-lg font-bold text-slate-900">{title}</h3>

        <p className="mt-2 text-sm text-slate-600 leading-6 flex-grow">{description}</p>

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
  const [muted, setMuted] = useState(true);

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
            Combining basketball development with Islamic values for stronger bodies
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

      {/* REEL VIDEO (mainVid2) */}
      <section className="container-x pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <div className="text-sm tracking-widest text-slate-500">WATCH</div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              See the <span className="text-[rgb(var(--primary))]">energy</span> at Sunnah Spot
            </h2>
            <p className="mt-3 text-slate-600">
              Real training, real mentorship, real growth. Tap unmute to hear the vibe.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/media"
                className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-white hover:bg-[rgb(var(--primary-dark))] transition"
              >
                Watch More
              </Link>
              <Link
                href="/registration"
                className="inline-flex justify-center rounded-xl border border-black/10 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-black/5 transition"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Reel */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[28px] border border-black/10 bg-black shadow-lg">
              {/* 9:16 container */}
              <div className="relative aspect-[9/16] w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={VIDEOS.mainVid2}
                  autoPlay
                  loop
                  playsInline
                  muted={muted}
                  controls={false}
                  preload="metadata"
                />
                {/* Subtle overlay for button readability */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-black/0 to-black/0" />

                {/* Mute toggle */}
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-black/70 transition"
                  aria-label={muted ? "Unmute video" : "Mute video"}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  {muted ? "Unmute" : "Mute"}
                </button>
              </div>
            </div>

            <div className="mt-3 text-center text-xs text-slate-500">
              Tip: sound is off by default for autoplay
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container-x pb-20">
        <div className="max-w-2xl">
          <div className="text-sm tracking-widest text-slate-500">OUR PROGRAMS</div>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            <span className="text-[rgb(var(--primary))]">Empowering</span> the Youth
          </h2>
          <p className="mt-3 text-slate-600">
            We offer programs that nurture both physical and spiritual growth.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProgramCard
            title="Basketball Development"
            description="Develop strong fundamentals, basketball IQ, and confidence through structured training."
            href="/programs"
            icon={<Basketball size={32} strokeWidth={2.2} />}
          />

          <ProgramCard
            title="Competitive Teams"
            description="Train and compete at a high level with structured practices, elite coaching, and a strong focus on teamwork, discipline, and leadership."
            href="/programs"
            icon={<Trophy size={32} strokeWidth={2.2} />}
          />

          <ProgramCard
            title="House League"
            description="A fun and structured league environment where players build skills, confidence, and game experience in a supportive community setting."
            href="/programs"
            icon={<UsersIcon size={32} strokeWidth={2.2} />}
          />
        </div>
      </section>
    </div>
  );
}