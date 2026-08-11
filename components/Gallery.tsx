"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/config/site";

interface GalleryProps {
  photos: Photo[];
}

/** Grille de photos responsive avec lightbox clavier/tactile au clic. */
export function Gallery({ photos }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            aria-label={`Agrandir la photo : ${photo.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG local */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse photo"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer la visionneuse"
            className="absolute right-4 top-4 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>

          <button
            type="button"
            onClick={showPrev}
            aria-label="Photo précédente"
            className="absolute left-2 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element -- SVG local */}
          <img
            src={photos[openIndex].src}
            alt={photos[openIndex].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />

          <button
            type="button"
            onClick={showNext}
            aria-label="Photo suivante"
            className="absolute right-2 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" aria-hidden />
          </button>
        </div>
      )}
    </>
  );
}
