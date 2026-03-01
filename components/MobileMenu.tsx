"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/data/nav";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const y = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${y}px`;
    document.body.style.width = "100%";

    return () => {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(top || "0") * -1);
    };
  }, [open]);
  return (
    <div
      className={[
        "fixed inset-0 z-50 transition",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div
        className={[
          "absolute inset-0 bg-black/60 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={onClose}
      />
      <div
        className={[
          "fixed right-0 top-0 z-50 h-[100dvh] w-[88%] max-w-sm bg-[#0B1410] text-white",
          "flex flex-col",
          "transition-transform",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
      >
        {/* Header (sticky) */}
        <div className="shrink-0 border-b border-white/10 px-5 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-wide">Menu</div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-white/10"
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        {/* Scroll area */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <nav>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={onClose}
                    className="block rounded-xl px-4 py-3 text-lg hover:bg-white/10"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 space-y-3">
            <Link
              href="/registration"
              onClick={onClose}
              className="block w-full rounded-xl bg-[rgb(var(--primary))] px-4 py-3 text-center font-semibold text-white hover:bg-[rgb(var(--primary-dark))]"
            >
              Join Now
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full rounded-xl bg-white px-4 py-3 text-center font-semibold text-[rgb(var(--primary))] hover:bg-white/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}