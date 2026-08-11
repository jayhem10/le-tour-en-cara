"use client";

import { useState } from "react";
import { Eye, EyeOff, HelpCircle, Info, KeyRound, Leaf, Loader2, MapPin, SignpostBig, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CopyButton } from "@/components/ui/CopyButton";
import { HowItWorks } from "@/components/HowItWorks";

const usageRules = [
  { icon: KeyRound, text: "Ces identifiants sont les vôtres pendant toute la durée du séjour, gardez-les pour vous." },
  {
    icon: Leaf,
    text: "On aime laisser la nature aussi belle qu'on l'a trouvée : un réflexe simple qui profite à tout le monde.",
  },
  {
    icon: SignpostBig,
    text: "Les règles de stationnement varient d'un lieu à l'autre : un coup d'œil avant de s'installer, et c'est réglé.",
  },
  {
    icon: HelpCircle,
    text: "Un doute sur un spot ? Les avis récents et les emplacements officiels sont vos meilleurs alliés.",
  },
];

const login = process.env.NEXT_PUBLIC_PARK4NIGHT_LOGIN ?? "Non configuré";

/** Card d'accès Park4night : login, mot de passe masqué à la demande, règles, tutoriel. */
export function Park4nightAccess() {
  const [password, setPassword] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleReveal() {
    if (password) {
      setPassword(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/park4night");
      if (!response.ok) throw new Error();
      const data = (await response.json()) as { password: string };
      setPassword(data.password);
    } catch {
      setError("Impossible de récupérer le mot de passe. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="-m-6 mb-6 flex items-center gap-4 bg-terracotta/10 px-6 py-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream">
          <MapPin className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Park4night</h3>
          <p className="text-sm text-ink/60">Le compte partagé pour trouver vos spots pendant le séjour.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:divide-x lg:divide-sable-dark/50">
        <div className="flex flex-col gap-6 lg:pr-8">
          <div>
            <h4 className="font-display font-semibold text-ink">Identifiants du compte partagé</h4>
            <p className="text-sm text-ink/60">Valables pendant toute la durée de votre location.</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/70 p-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/50">Identifiant</p>
                <p className="font-mono text-sm font-medium text-ink">{login}</p>
              </div>
              <CopyButton value={login} label="Copier l'identifiant" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/70 p-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/50">Mot de passe</p>
                <p className="font-mono text-sm font-medium text-ink">
                  {password ?? "••••••••••"}
                </p>
                {error && <p className="mt-1 text-xs text-terracotta-dark">{error}</p>}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleReveal}
                  aria-label={password ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                  className="inline-flex items-center gap-1.5 rounded-full bg-sauge/15 px-3 py-1.5 text-sm font-medium text-sauge-dark transition-colors hover:bg-sauge/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sauge-dark disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  ) : password ? (
                    <EyeOff className="h-4 w-4" aria-hidden />
                  ) : (
                    <Eye className="h-4 w-4" aria-hidden />
                  )}
                  {password ? "Masquer" : "Afficher"}
                </button>
                {password && <CopyButton value={password} label="Copier le mot de passe" />}
              </div>
            </div>
          </div>

          <div className="flex gap-3 rounded-2xl border border-sauge/30 bg-sauge-light/15 p-4">
            <Info className="h-5 w-5 shrink-0 text-sauge-dark" aria-hidden />
            <div>
              <p className="mb-1 text-sm font-semibold text-sauge-dark">Bonnes pratiques</p>
              <ul className="space-y-2">
                {usageRules.map((rule) => {
                  const Icon = rule.icon;
                  return (
                    <li key={rule.text} className="flex items-start gap-2 text-sm text-ink/70">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-sauge-dark" aria-hidden />
                      {rule.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex gap-3 rounded-2xl border-2 border-terracotta/40 bg-terracotta-light/15 p-4">
            <Star className="h-5 w-5 shrink-0 text-terracotta-dark" aria-hidden />
            <div>
              <p className="mb-1 text-sm font-semibold text-terracotta-dark">Votre dossier d&apos;aventurier</p>
              <p className="text-sm text-ink/70">
                Créez-vous un dossier de favoris dans l&apos;app, à votre nom d&apos;aventurier, pour y noter vos
                spots coup de cœur. On adore les découvrir à votre retour, et les prochains locataires aussi !
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pl-8">
          <h4 className="mb-4 font-display font-semibold text-ink">Comment ça marche</h4>
          <HowItWorks />
        </div>
      </div>
    </Card>
  );
}
