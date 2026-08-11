import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Card de base : coins arrondis, ombre douce, fond clair. */
export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-sable-dark/60 bg-white/80 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-md hover:shadow-ink/10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
