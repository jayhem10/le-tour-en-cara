import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Consignes importantes (ex: batterie) et explication du bloc de contrôle Weinsberg. */
export function VanTips() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {siteConfig.importantTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <ScrollReveal key={tip.title} delay={index * 60}>
              <div className="flex items-start gap-3 rounded-2xl border-2 border-terracotta/40 bg-terracotta-light/15 p-4 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-terracotta-dark">{tip.title}</p>
                  <p className="mt-1 text-sm text-ink/70">{tip.description}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={80}>
        <Card>
          <h3 className="mb-1 font-display text-lg font-semibold text-ink">Bloc de contrôle Weinsberg</h3>
          <p className="mb-6 text-sm text-ink/60">{siteConfig.controlPanelNote}</p>
          <div className="space-y-6">
            {siteConfig.controlPanel.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-sm font-semibold text-ink/70">{group.title}</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {group.items.map((indicator) => {
                    const Icon = indicator.icon;
                    return (
                      <div
                        key={indicator.label}
                        className="flex flex-col items-start gap-2 rounded-2xl bg-sauge-light/15 p-4"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sauge-light/40 text-sauge-dark">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <p className="font-display font-semibold text-ink">{indicator.label}</p>
                        <p className="text-sm text-ink/70">{indicator.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </ScrollReveal>
    </div>
  );
}

