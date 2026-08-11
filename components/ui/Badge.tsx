import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: "terracotta" | "sauge" | "sable";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  terracotta: "bg-terracotta-light/40 text-terracotta-dark",
  sauge: "bg-sauge-light/50 text-sauge-dark",
  sable: "bg-sable text-ink",
};

/** Petite étiquette arrondie, utilisée pour les statuts et labels courts. */
export function Badge({ children, tone = "sable", className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${toneClasses[tone]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
