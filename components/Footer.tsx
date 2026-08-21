"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Pied de page avec mentions et bouton de déconnexion discret. */
export function Footer() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <footer className="border-t border-sable-dark/50 bg-sable/40 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-ink/60 sm:px-6">
        <p className="inline-flex items-center gap-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element -- image locale, next/image via /_next/image ne se résout pas ici */}
          <img src="/globe.png" alt="" width={14} height={14} className="shrink-0" aria-hidden />©{" "}
          {new Date().getFullYear()} {siteConfig.general.vanName}. Site privé réservé aux locataires.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/mentions-legales"
            className="text-xs text-ink/50 underline underline-offset-4 hover:text-terracotta-dark"
          >
            Mentions légales
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="inline-flex items-center gap-1.5 text-xs text-ink/50 underline underline-offset-4 hover:text-terracotta-dark disabled:opacity-60"
          >
            <LogOut className="h-3.5 w-3.5" aria-hidden />
            Se déconnecter
          </button>
        </div>
        <p className="text-xs text-ink/40">Site réalisé par Jayhem</p>
      </div>
    </footer>
  );
}
