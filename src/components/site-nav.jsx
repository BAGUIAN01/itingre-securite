"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const PHONE_1 = "+226 05 28 56 56";

const LINKS = [
  ["À propos", "#about"],
  ["Services", "#services"],
  ["Équipe", "#team"],
  ["Événement", "#launch"],
  ["Contact", "#contact"],
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--ink)]/70 backdrop-blur-md border-b border-[color:var(--gold)]/15">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-10 md:py-4">
        <Link href="#top" className="flex items-center gap-2.5 md:gap-3" onClick={() => setOpen(false)}>
          <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-[color:var(--gold)]/60 md:h-11 md:w-11">
            <Image src="/logo.jpeg" alt="Itingré Sécurité" fill className="object-cover" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-semibold tracking-wide text-[color:var(--ivory)] md:text-[17px]">
              ITINGRÉ
            </span>
            <span className="caption text-[10px] text-[color:var(--gold)] md:text-[11px]">Sécurité</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="caption text-[color:var(--ivory)]/70 transition-colors hover:text-[color:var(--gold)]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_1.replace(/\s/g, "")}`}
            className="group flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-3 py-2 text-[12px] font-medium text-[color:var(--gold)] transition-all hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] md:px-4 md:text-[13px]"
            aria-label="Appeler Itingré Sécurité"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{PHONE_1}</span>
            <span className="sm:hidden">Appeler</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--gold)]/50 text-[color:var(--gold)] transition-colors hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[57px] -z-10 bg-[color:var(--ink)]/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Panel */}
        <nav
          className={`border-t border-[color:var(--gold)]/15 bg-[color:var(--ink)]/95 backdrop-blur-md transition-all duration-300 ease-out ${
            open
              ? "max-h-[420px] opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <ul className="mx-auto flex max-w-[1400px] flex-col px-4 py-2">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[color:var(--gold)]/10 py-4 font-display text-xl text-[color:var(--ivory)] transition-colors hover:text-[color:var(--gold)]"
                >
                  {label}
                  <span className="caption text-[color:var(--gold)]/60">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
