import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Mini-tutoriel en timeline verticale, 100% éditable dans site.ts. */
export function HowItWorks() {
  const steps = siteConfig.howItWorks;

  return (
    <ol>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
            <div className="relative flex flex-col items-center">
              <span
                aria-hidden
                className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta font-display text-sm font-bold text-cream"
              >
                {index + 1}
              </span>
              {!isLast && <span aria-hidden className="absolute top-9 h-full w-px bg-sauge/30" />}
            </div>
            <ScrollReveal delay={index * 60} className="pb-1">
              <p className="font-display font-semibold text-ink">{step.title}</p>
              <p className="text-sm text-ink/70">{step.description}</p>
              {step.link && (
                <a
                  href={step.link.href}
                  className="mt-1 inline-block text-sm font-medium text-sauge-dark underline underline-offset-2 hover:text-sauge"
                >
                  {step.link.label}
                </a>
              )}
            </ScrollReveal>
          </li>
        );
      })}
    </ol>
  );
}
