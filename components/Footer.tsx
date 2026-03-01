import Link from "next/link";
import { NAV_LINKS } from "@/data/nav";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1410] text-white/80 border-t border-white/10">
      <div className="container-x py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-white font-semibold">Sunnah Spot Saliheen</div>
          <p className="mt-3 text-sm text-white/70">
            Empowering youth through basketball development grounded in Islamic values.
          </p>
        </div>

        <div>
          <div className="text-white font-semibold">Quick Links</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link className="hover:text-white" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold">Contact</div>

          <div className="mt-4 flex items-center gap-4">
            {/* Email */}
            <a
              href="mailto:info@sunnahspot.ca"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[rgb(var(--primary))] hover:text-black transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            {/* Phone */}
            <a
              href="tel:+16475450664"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[rgb(var(--primary))] hover:text-black transition"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/sunnahspot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[rgb(var(--primary))] hover:text-black transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
</div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-x text-xs text-white/50">
          © {new Date().getFullYear()} Sunnah Spot Saliheen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}