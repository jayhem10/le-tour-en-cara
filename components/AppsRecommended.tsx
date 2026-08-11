import { Apple, PlayCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Badges de téléchargement pour les apps recommandées, générés depuis site.ts. */
export function AppsRecommended() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {siteConfig.apps.map((app, index) => {
        const Icon = app.icon;
        return (
          <ScrollReveal key={app.id} delay={index * 80}>
            <Card className="flex h-full flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sauge-light/40 text-sauge-dark">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{app.name}</h3>
              </div>
              <p className="text-sm text-ink/70">{app.description}</p>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {app.appStoreUrl && (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Télécharger ${app.name} sur l'App Store`}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
                  >
                    <Apple className="h-4 w-4" aria-hidden />
                    App Store
                  </a>
                )}
                {app.googlePlayUrl && (
                  <a
                    href={app.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Télécharger ${app.name} sur Google Play`}
                    className="inline-flex items-center gap-2 rounded-full bg-sauge-dark px-4 py-2 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
                  >
                    <PlayCircle className="h-4 w-4" aria-hidden />
                    Google Play
                  </a>
                )}
              </div>
              {!app.googlePlayUrl && app.androidNote && (
                <p className="text-xs italic text-ink/50">{app.androidNote}</p>
              )}
            </Card>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
