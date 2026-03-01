"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, X } from "lucide-react";
import { VIDEOS } from "@/data/videos"; // adjust if needed

type MediaItem = {
  key: string;
  title: string;
  src: string;
  poster?: string; // optional: add thumbnails later
};

const MEDIA: MediaItem[] = [
  { key: "final", title: "Sunnah Spot", src: VIDEOS.sunnahspotFinal, poster: "/thumbs/sunnahspot-final-thumb.png" },
  { key: "ahmed", title: "Ahmed Mix", src: VIDEOS.ahmedShortMix, poster: "/thumbs/ahmed-thumb.png" },
  { key: "dawoud", title: "Dawoud Mix", src: VIDEOS.dawoudMix, poster: "/thumbs/dawoud-thumb.png" },
  { key: "farhan", title: "Farhan Mix", src: VIDEOS.farhanMix, poster: "/thumbs/farhan-thumb.png" },
  { key: "teamMix2", title: "Team Mix", src: VIDEOS.teamMix2, poster: "/thumbs/team-mix-2-thumb.png" },
  { key: "u13", title: "U13 Team Mix", src: VIDEOS.u13TeamMix, poster: "/thumbs/u13-thumb.png" },
];

function MediaCard({
  item,
  onOpen,
}: {
  item: MediaItem;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full text-left"
      aria-label={`Play ${item.title}`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[9/16] w-full">
          {/* Thumbnail */}
          {item.poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.poster}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover opacity-95"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/10" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition group-hover:bg-black/75">
              <Play size={18} />
              Play
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="text-sm font-bold text-white">{item.title}</div>
            <div className="mt-1 text-xs text-white/75">Tap to watch</div>
          </div>
        </div>
      </div>
    </button>
  );
}

function VideoModal({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: MediaItem | null;
}) {
  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80 transition"
            aria-label="Close video"
          >
            <X size={18} />
          </button>

          <div className="relative aspect-[9/16] w-full">
            <video
              className="h-full w-full object-cover"
              src={item.src}
              controls
              playsInline
              preload="metadata"
              poster={item.poster}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MediaPage() {
  const [active, setActive] = useState<MediaItem | null>(null);

  return (
    <div className="bg-[rgb(245,247,246)]">
      {/* Header */}
      <section className="bg-[#0B1410]">
        <div className="container-x py-14">
          <div className="max-w-2xl">
            <div className="text-sm tracking-widest text-white/70">MEDIA</div>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white">
              Highlights & Clips
            </h1>
            <p className="mt-4 text-white/80">
              A quick look at the work, the energy, and the culture at Sunnah Spot.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-black hover:bg-[rgb(var(--primary-dark))] transition"
              >
                Join Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-x py-14">
        <div className="mb-6 max-w-2xl">
          <div className="text-sm tracking-widest text-slate-500">FEATURED</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEDIA.map((item) => (
            <MediaCard
              key={item.key}
              item={item}
              onOpen={() => setActive(item)}
            />
          ))}
        </div>
      </section>

      <VideoModal
        open={!!active}
        item={active}
        onClose={() => setActive(null)}
      />
    </div>
  );
}