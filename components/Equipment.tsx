import { CheckCircle2, Flame } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Équipements inclus, groupés par catégorie (Conduite, Cuisine / Repas, ...). */
export function Equipment() {
  return (
    <div className="space-y-8">
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
                  {category.items.map((item) => {
                    const text = typeof item === "string" ? item : item.text;
                    const link = typeof item === "string" ? undefined : item.link;
                    return (
                      <li key={text} className="flex items-start gap-2 text-sm text-ink/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sauge-dark" aria-hidden />
                        <span>
                          {text}
                          {link && (
                            <a
                              href={link.href}
                              className="font-medium text-sauge-dark underline underline-offset-2 hover:text-sauge"
                            >
                              {link.label}
                            </a>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={siteConfig.equipment.length * 60}>
        <Card>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-light/30 text-terracotta-dark">
              <Flame className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="font-display text-lg font-semibold text-ink">Chauffage et eau chaude Truma</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section>
              <h4 className="font-semibold text-ink">Chauffage</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Sur le panneau Truma, activez le mode chauffage puis réglez la température souhaitée. Pensez à
                ouvrir les aérations du bas et, si besoin, celle de la popup.
              </p>
            </section>
            <section>
              <h4 className="font-semibold text-ink">Eau chaude</h4>
              <ol className="mt-2 list-inside list-decimal space-y-2 text-sm leading-relaxed text-ink/70">
                <li>Choisissez ECO, HOT ou BOOST sur le panneau Truma.</li>
                <li>
                  Ouvrez un robinet en position chaude et laissez couler environ 2 minutes pour remplir le ballon,
                  puis patientez.
                </li>
                <li>
                  L’eau commence généralement à chauffer en moins de 15 minutes. Une icône qui clignote et le bruit
                  de ventilation sous les sièges indiquent que la chauffe est en cours : c’est normal.
                </li>
              </ol>
              <p className="mt-3 text-sm font-medium text-sauge-dark">
                Quand l’icône cesse de clignoter, le ballon est plein et chaud.
              </p>
            </section>
          </div>
        </Card>
      </ScrollReveal>
    </div>
  );
}
