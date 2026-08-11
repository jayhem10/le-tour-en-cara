"use client";

import { useEffect, useState } from "react";
import { PowerOff } from "lucide-react";

/** Bannière visible uniquement le soir/la nuit (18h-6h), rappel de couper l'autoradio Pioneer. */
export function PioneerReminderBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setShow(hour >= 18 || hour < 6);
  }, []);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center gap-2 bg-terracotta px-4 py-2 text-center text-sm font-medium text-cream">
      <PowerOff className="h-4 w-4 shrink-0" aria-hidden />
      Pensez à couper l&apos;alimentation de l&apos;autoradio Pioneer avant de dormir !
    </div>
  );
}
