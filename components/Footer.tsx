import Link from "next/link";
import { NAV_LINKS } from "@/data/nav";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1410] text-white/80 border-t border-white/10">
      <div className="container-x py-12 grid gap-10 md:grid-cols-3">
        
        {/* About */}
        <div>
          <div className="text-white font-semibold">
            Sunnah Spot Saliheen
          </div>
          <p className="mt-3 text-sm text-white/70">
            Empowering youth through basketball development grounded in Islamic values.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-white font-semibold">Quick Links</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link className="hover:text-white transition" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          
          <div>
            © {new Date().getFullYear()} Sunnah Spot Saliheen. All rights reserved.
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-white/40">
              website made by
            </span>

            <a
              href="https://prodbyyao.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm tracking-wide group transition"
            >
              <span
                className="text-[rgb(var(--primary))]"
                style={{ textShadow: "0 0 12px rgba(71,166,20,0.6)" }}
              >
                &gt; prod by{" "}
              </span>

              <span
                className="text-white group-hover:text-[rgb(var(--primary))] transition"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.4)" }}
              >
                yao
              </span>

              <span
                className="text-[rgb(var(--primary))]"
                style={{ textShadow: "0 0 12px rgba(71,166,20,0.6)" }}
              >
                _
              </span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}