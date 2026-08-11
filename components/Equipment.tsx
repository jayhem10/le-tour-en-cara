import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Équipements inclus, groupés par catégorie (Conduite, Cuisine / Repas, ...). */
export function Equipment() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {siteConfig.equipment.map((category, index) => {
        const Icon = category.icon;
        return (
          <ScrollReveal key={category.title} delay={index * 60}>
            <Card className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-light/30 text-terracotta-dark">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{category.title}</h3>
              </div>
              <ul className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sauge-dark" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
