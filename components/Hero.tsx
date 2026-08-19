import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Grande photo, titre accrocheur, invite à découvrir la suite. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden sm:h-screen">
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG local, next/image nécessiterait dangerouslyAllowSVG */}
      <img
        src={siteConfig.gallery[0]?.src}
        alt={siteConfig.gallery[0]?.alt ?? ""}
        className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/55 to-ink/25" aria-hidden />

      <div className="relative mx-auto flex min-h-[65vh] max-w-6xl flex-col justify-between gap-6 px-4 pb-16 pt-32 sm:h-full sm:px-6">
        <div className="flex flex-col gap-4">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sable drop-shadow-md">
            {siteConfig.general.model}
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-cream drop-shadow-md sm:text-5xl md:text-6xl">
            {siteConfig.general.tagline}
          </h1>
        </div>
        <p className="mx-auto max-w-xl text-center text-lg text-cream/90 drop-shadow-md">
          {siteConfig.general.description}
        </p>
      </div>

      <a
        href="#apropos"
        aria-label="Découvrir la suite"
        className="absolute inset-x-0 bottom-6 flex animate-bounce justify-center text-cream drop-shadow-md"
      >
        <ChevronDown className="h-8 w-8" aria-hidden />
      </a>
    </section>
  );
}
