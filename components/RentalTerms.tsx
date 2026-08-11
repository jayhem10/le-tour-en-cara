import { Heart, MapPin, Navigation, Map as MapIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Conditions de location, modalités de caution, consignes de retour et localisation du fourgon. */
export function RentalTerms() {
  const { rentalConditions, deposit, returnGuidelines } = siteConfig;
  const coords = `${deposit.lat},${deposit.lng}`;

  const mapLinks = [
    { label: "Google Maps", href: deposit.mapsUrl, icon: MapPin },
    { label: "Waze", href: `https://waze.com/ul?ll=${coords}&navigate=yes`, icon: Navigation },
    { label: "Plans (Apple Maps)", href: `https://maps.apple.com/?ll=${coords}&q=${encodeURIComponent(deposit.address)}`, icon: MapIcon },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ScrollReveal className="h-full">
          <Card className="flex h-full flex-col">
            <h3 className="mb-4 font-display text-lg font-semibold text-ink">Conditions de location</h3>
            <ul className="divide-y divide-sable-dark/50">
              {rentalConditions.map((condition) => (
                <li
                  key={condition.label}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-2.5 text-sm"
                >
                  <span className="text-ink/70">{condition.label}</span>
                  <span className="font-medium text-ink">{condition.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={60} className="h-full">
          <Card className="flex h-full flex-col justify-center text-center">
            <h3 className="mb-1 font-display text-lg font-semibold text-ink">Caution</h3>
            <p className="mb-3 font-display text-3xl font-bold text-terracotta-dark">{deposit.amount}</p>
            <p className="text-sm text-ink/70">{deposit.description}</p>
          </Card>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={120}>
        <Card>
          <h3 className="mb-4 font-display text-lg font-semibold text-ink">Avant de rendre le fourgon</h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {returnGuidelines.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex items-start gap-2 text-sm text-ink/80">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-dark" aria-hidden />
                  {item.text}
                </li>
              );
            })}
          </ul>
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm font-medium text-terracotta-dark">
            <Heart className="h-4 w-4 shrink-0" aria-hidden />
            Merci !
          </p>
        </Card>
      </ScrollReveal>

      <ScrollReveal delay={180}>
        <Card>
          <h3 className="mb-4 font-display text-lg font-semibold text-ink">Où nous trouver</h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <iframe
              title="Localisation sur Google Maps"
              src={`https://www.google.com/maps?q=${coords}&z=15&output=embed`}
              loading="lazy"
              className="h-64 w-full rounded-2xl border border-sable-dark/50 lg:h-full"
            />
            <div className="flex flex-col justify-center gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/50">Adresse</p>
                <p className="text-sm text-ink/70">{deposit.address}</p>
              </div>
              <div className="flex flex-col gap-2">
                {mapLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-sauge-light/20 p-3 text-sm font-medium text-sauge-dark hover:bg-sauge-light/30"
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      Ouvrir dans {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
      </ScrollReveal>
    </div>
  );
}
