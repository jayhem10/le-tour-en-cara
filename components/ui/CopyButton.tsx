"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
}

/** Bouton "copier" avec feedback visuel temporaire (icône + texte). */
export function CopyButton({ value, label = "Copier", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Le presse-papier peut être indisponible (contexte non sécurisé, permissions).
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copié" : label}
      className={`inline-flex items-center gap-1.5 rounded-full bg-sauge/15 px-3 py-1.5 text-sm font-medium text-sauge-dark transition-colors hover:bg-sauge/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sauge-dark ${className}`}
    >
      {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
      {copied ? "Copié !" : label}
    </button>
  );
}
