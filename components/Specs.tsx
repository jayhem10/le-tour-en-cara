import { dimensionIcons, siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const dimensionLabels: Record<keyof typeof dimensionIcons, string> = {
  height: "Hauteur",
  width: "Largeur",
  length: "Longueur",
};

/** Caractéristiques techniques : gabarit mis en avant + grille de specs. */
export function Specs() {
  const { dimensions, specs } = siteConfig;

  return (
    <div className="space-y-10">
      <ScrollReveal>
        <div className="rounded-3xl border-2 border-terracotta/30 bg-terracotta-light/15 p-6 sm:p-8">
          <h3 className="mb-1 font-display text-lg font-semibold text-terracotta-dark">
            Gabarit du véhicule
          </h3>
          <p className="mb-6 text-sm text-ink/70">
            À vérifier systématiquement avant un parking couvert ou une route étroite.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {(Object.keys(dimensions) as Array<keyof typeof dimensions>).map((key) => {
              const Icon = dimensionIcons[key];
              return (
                <div
                  key={key}
                  className="flex items-center gap-4 rounded-2xl bg-white/80 p-5 shadow-sm shadow-ink/5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm text-ink/60">{dimensionLabels[key]}</p>
                    <p className="font-display text-xl font-bold text-ink">{dimensions[key]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specs.map((spec, index) => {
          const Icon = spec.icon;
          return (
            <ScrollReveal key={spec.label} delay={index * 60}>
              <Card className="flex h-full items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sauge-light/40 text-sauge-dark">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-ink/60">{spec.label}</p>
                  <p className="font-display font-semibold text-ink">{spec.value}</p>
                </div>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
