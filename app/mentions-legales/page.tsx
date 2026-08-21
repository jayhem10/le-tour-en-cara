import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Mentions légales — Site privé",
  robots: { index: false, follow: false, nocache: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 px-4 py-12 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-terracotta-dark hover:text-terracotta"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Retour au site
      </Link>

      <Card className="flex flex-col gap-6 text-sm text-ink/80">
        <h1 className="font-display text-2xl font-semibold text-ink">Mentions légales</h1>

        <section>
          <h2 className="mb-1 font-display font-semibold text-ink">Éditeur du site</h2>
          <p>
            Ce site est édité à titre non professionnel par Jérémy, dans le cadre de la location du
            fourgon aménagé présenté sur ce site. Conformément à l&apos;article 6-III de la loi n° 2004-575
            du 21 juin 2004, l&apos;adresse postale de l&apos;éditeur est communicable sur demande à
            l&apos;hébergeur ou aux autorités compétentes.
          </p>
          <p className="mt-1">
            Contact :{" "}
            <a href="mailto:noble.jka@protonmail.com" className="underline underline-offset-4 hover:text-terracotta-dark">
              noble.jka@protonmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-display font-semibold text-ink">Hébergement</h2>
          <p>
            Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis —{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-terracotta-dark"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-display font-semibold text-ink">Objet du site</h2>
          <p>
            Ce site est un site privé, non indexé par les moteurs de recherche et protégé par mot de
            passe, réservé aux locataires du fourgon. Il présente le véhicule, ses équipements et des
            conseils pratiques pour le séjour. Les réservations et paiements se font exclusivement via
            l&apos;annonce Yescapa, en dehors de ce site.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-display font-semibold text-ink">Cookies et données personnelles</h2>
          <p>
            Un cookie de session strictement nécessaire (<code>van_session</code>) est déposé lors de la
            connexion, uniquement pour maintenir l&apos;accès au site : il ne contient aucune donnée
            personnelle et n&apos;est pas utilisé à des fins de suivi ou de publicité.
          </p>
          <p className="mt-1">
            Le site utilise Vercel Analytics, un outil de mesure d&apos;audience anonymisé qui ne dépose
            pas de cookie et ne permet pas de suivre un visiteur individuellement.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-display font-semibold text-ink">Propriété intellectuelle</h2>
          <p>
            Les textes et photos présents sur ce site sont la propriété de l&apos;éditeur et ne peuvent
            être réutilisés sans autorisation.
          </p>
        </section>
      </Card>
    </div>
  );
}
