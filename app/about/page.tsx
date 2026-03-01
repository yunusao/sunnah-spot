"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, HeartHandshake, ShieldCheck, Users, Volume2, VolumeX } from "lucide-react";
import { VIDEOS } from "@/data/videos"; // adjust path if needed

function MarbleCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border border-black/5 shadow-sm overflow-hidden transition hover:shadow-lg">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "url('/textures/marble-light.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative bg-white/95 backdrop-blur p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="bg-[rgb(245,247,246)]">
      {/* HERO */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/teamhuddle.png"
          alt="Sunnah Spot youth training in a gym"
          fill
          priority
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        <div className="relative container-x py-16">
          <div className="max-w-3xl text-white">
            <div className="text-sm tracking-widest text-white/70">ABOUT US</div>

            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              Building Stronger{" "}
              <span className="text-[rgb(var(--primary))]">Minds</span> &{" "}
              <span className="text-[rgb(var(--primary))]">Bodies</span> in a Halal Environment
            </h1>

            <p className="mt-5 text-white/80 max-w-2xl leading-7">
              Sunnah Spot is a youth basketball club focused on excellence in training while
              grounding our culture in Islamic values—discipline, humility, respect, and
              brotherhood. Our goal is to help young athletes grow on and off the court.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-black hover:bg-[rgb(var(--primary-dark))] transition"
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
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="relative container-x py-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "url('/textures/marble-light.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-sm tracking-widest text-slate-500">OUR MISSION</div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Empowering{" "}
            <span className="text-[rgb(var(--primary))]">Muslim Youth</span>{" "}
            Through Elite Basketball
          </h2>

          <p className="mt-6 text-slate-600 leading-8 text-lg">
            Our mission is to empower Muslim youth through elite basketball programs
            with Islamic-based coaching and mentorship. Led by former national-level
            players, we provide high-quality training to develop basketball skills,
            leadership, confidence, and Muslim identity.
          </p>
        </div>
      </section>

      {/* COACH'S MESSAGE (VIDEO) */}
      <section className="container-x pb-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <div className="text-sm tracking-widest text-slate-500">COACH'S MESSAGE</div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Hear it from the{" "}
              <span className="text-[rgb(var(--primary))]">coaches</span>
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A quick message about our culture, our standards, and what we want for every
              player who steps into Sunnah Spot.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/coaches"
                className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 text-sm font-semibold text-white hover:bg-[rgb(var(--primary-dark))] transition"
              >
                Meet the Coaches
              </Link>
              <Link
                href="/registration"
                className="inline-flex justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-black/5 transition"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Video card (Reels / 9:16) */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[28px] border border-black/10 bg-black shadow-lg">
              <div className="relative aspect-[9/16] w-full">
                <video
                  className="h-full w-full object-cover"
                  src={VIDEOS.coachesMessage}
                  controls
                  playsInline
                  preload="metadata"
                  poster="/thumbs/coaches-message-thumb.png" // add this thumbnail image
                />
              </div>
            </div>

            <div className="mt-3 text-center text-xs text-slate-500">
              Coach’s message about our mission and standards.
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <div className="text-sm tracking-widest text-slate-500">OUR PURPOSE</div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              More than basketball
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              We combine structured athletic development with character-building principles.
              We want our players to become confident athletes, strong teammates, and grounded
              young Muslims—ready for high school, rep, and beyond.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {[
                "Professional coaching with age-appropriate development",
                "Islamic values and character in a respectful environment",
                "Brotherhood, teamwork, and accountability",
                "Safe, supportive culture for youth and families",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 text-[rgb(var(--primary))]" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right image */}
          <div className="relative overflow-hidden rounded-2xl border border-black/5 shadow-sm">
            <div className="relative h-72 sm:h-96">
              <Image
                src="/images/onevone.png"
                alt="Coach mentoring youth"
                fill
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="container-x pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MarbleCard title="Coaching" icon={<Users size={22} strokeWidth={2.2} />}>
            Thoughtful instruction tailored to each level, with consistent feedback and
            accountability.
          </MarbleCard>

          <MarbleCard title="Brotherhood" icon={<HeartHandshake size={22} strokeWidth={2.2} />}>
            A positive culture where players support each other and grow together.
          </MarbleCard>

          <MarbleCard title="Safety" icon={<ShieldCheck size={22} strokeWidth={2.2} />}>
            A respectful environment built on good character, discipline, and parent trust.
          </MarbleCard>

          <MarbleCard title="Excellence" icon={<CheckCircle2 size={22} strokeWidth={2.2} />}>
            Training that develops fundamentals, basketball IQ, and confidence to compete.
          </MarbleCard>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-white border border-black/5 p-6 shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-bold text-slate-900">Ready to get started?</div>
            <div className="text-sm text-slate-600">
              Fill out the interest form and we’ll contact you with upcoming programs.
            </div>
          </div>
          <Link
            href="/registration"
            className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 text-sm font-semibold text-black hover:bg-[rgb(var(--primary-dark))] transition"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
}