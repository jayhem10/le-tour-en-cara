import { MessageCircle, Phone, Tag } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

/** Coordonnées de contact, sans backend (tel, WhatsApp) + lien vers l'annonce Yescapa. */
export function Contact() {
  const { heading, message, phone, phoneLabel, phoneSecondary, phoneSecondaryLabel, whatsappUrl } =
    siteConfig.contact;

  return (
    <Card className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
      <h3 className="font-display text-xl font-semibold text-ink">{heading}</h3>
      <p className="text-ink/70">{message}</p>

      <div className="flex flex-wrap justify-center gap-3">
        {phone && (
          <Button href={`tel:${phone.replace(/\s+/g, "")}`} variant="primary">
            <Phone className="h-4 w-4" aria-hidden />
            {phoneLabel ? `${phoneLabel} · ${phone}` : phone}
          </Button>
        )}
        {phoneSecondary && (
          <Button href={`tel:${phoneSecondary.replace(/\s+/g, "")}`} variant="primary">
            <Phone className="h-4 w-4" aria-hidden />
            {phoneSecondaryLabel ? `${phoneSecondaryLabel} · ${phoneSecondary}` : phoneSecondary}
          </Button>
        )}
        {whatsappUrl && (
          <Button href={whatsappUrl} variant="outline" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </Button>
        )}
      </div>

      <div className="w-full border-t border-sable-dark/50 pt-6">
        <a
          href={siteConfig.listingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta-dark underline underline-offset-4 hover:text-terracotta"
        >
          <Tag className="h-4 w-4" aria-hidden />
          Voir l&apos;annonce sur Yescapa
        </a>
        <p className="mt-2 text-sm text-ink/60">{siteConfig.listingNote}</p>
      </div>
    </Card>
  );
}
