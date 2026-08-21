import { siteConfig } from "@/config/site";
import type { VanTip } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const severityOrder: Record<VanTip["severity"], number> = {
  critical: 0,
  important: 1,
  info: 2,
};

/** Styles par gravité, du plus voyant (critique) au plus discret (info), pour que les alertes importantes ne se noient pas. */
const severityStyles: Record<VanTip["severity"], { wrapper: string; iconWrap: string; title: string }> = {
  critical: {
    wrapper: "border-2 border-red-500/60 bg-red-50",
    iconWrap: "bg-red-100 text-red-600",
    title: "text-red-700",
  },
  important: {
    wrapper: "border-2 border-terracotta/40 bg-terracotta-light/15",
    iconWrap: "bg-terracotta-light/40 text-terracotta-dark",
    title: "text-terracotta-dark",
  },
  info: {
    wrapper: "border border-sauge/30 bg-sauge-light/10",
    iconWrap: "bg-sauge-light/40 text-sauge-dark",
    title: "text-sauge-dark",
  },
};

/** Consignes importantes (ex: batterie) et explication du bloc de contrôle Weinsberg. */
export function VanTips() {
  const sortedTips = [...siteConfig.importantTips].sort(
    (a, b) => severityOrder[a.severity] - severityOrder[b.severity],
  );

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {sortedTips.map((tip, index) => {
          const Icon = tip.icon;
          const styles = severityStyles[tip.severity];
          return (
            <ScrollReveal key={tip.title} delay={index * 60}>
              <div className={`flex items-start gap-3 rounded-2xl p-4 sm:p-5 ${styles.wrapper}`}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${styles.iconWrap}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className={`font-display font-semibold ${styles.title}`}>{tip.title}</p>
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

