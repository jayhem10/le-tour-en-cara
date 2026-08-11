import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#fourgon", label: "Le fourgon" },
  { href: "#caracteristiques", label: "Caractéristiques" },
  { href: "#equipements", label: "Équipements" },
  { href: "#conseils", label: "Conseils" },
  { href: "#apps", label: "Apps" },
  { href: "#park4night", label: "Park4night" },
];

/** Nav sticky avec ancres, visible en haut de chaque section. */
export function Header() {
  return (
    <header className="border-b border-sable-dark/50 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="inline-flex items-center gap-2 font-display text-lg font-semibold text-terracotta-dark"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- image locale, next/image via /_next/image ne se résout pas ici */}
          <img src="/globe.png" alt="" width={20} height={20} className="shrink-0" aria-hidden />
          {siteConfig.general.vanName}
        </Link>

        <nav aria-label="Navigation principale" className="hidden gap-4 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-terracotta-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark sm:inline-flex"
        >
          Contact
        </a>

        {/* Menu mobile : liste native accessible au clavier, sans JS additionnel */}
        <details className="relative lg:hidden">
          <summary
            aria-label="Ouvrir le menu de navigation"
            className="flex cursor-pointer list-none items-center justify-center rounded-full p-2 hover:bg-sable"
          >
            <Menu className="h-6 w-6 text-ink" aria-hidden />
          </summary>
          <nav
            aria-label="Navigation mobile"
            className="absolute right-0 mt-2 flex w-48 flex-col gap-1 rounded-2xl border border-sable-dark/50 bg-cream p-3 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-ink/80 hover:bg-sable hover:text-terracotta-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 rounded-xl bg-terracotta px-3 py-2 text-center text-sm font-semibold text-cream"
            >
              Contact
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
