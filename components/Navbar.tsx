"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/data/nav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0B1410] backdrop-blur border-b border-white/10">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white/5">
            <Image
              src="/logo.png"
              alt="Sunnah Spot Saliheen"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">
              SUNNAH SPOT SALIHEEN
            </div>
            <div className="text-xs tracking-widest text-white/70">
              Scarborough • Mississauga • Ottawa
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.slice(0, 5).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/registration"
            className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-white hover:bg-[rgb(var(--primary-dark))]"
          >
            Join Now
          </Link>
          <Link
  href="/contact"
  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[rgb(var(--primary))] hover:bg-white/90"
>
  Contact Us
</Link>
        </nav>

        {/* Mobile */}
        <button
          className="lg:hidden rounded-xl p-2 text-white hover:bg-white/10"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}