import { siteConfig } from "@/config/site";
import { MessageCircle, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Specs } from "@/components/Specs";
import { Equipment } from "@/components/Equipment";
import { VanTips } from "@/components/VanTips";
import { AppsRecommended } from "@/components/AppsRecommended";
import { Park4nightAccess } from "@/components/Park4nightAccess";
import { RentalTerms } from "@/components/RentalTerms";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sauge-dark">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <section id="apropos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="La famille" title="À propos de ce fourgon aménagé" />
          <About />
        </section>

        <section id="fourgon" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Présentation" title="Le fourgon" />
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center text-lg text-ink/70">
            {siteConfig.general.description}
          </ScrollReveal>
          <Gallery photos={siteConfig.gallery} />
        </section>

        <section id="caracteristiques" className="bg-white/60 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Specs" title="Caractéristiques techniques" />
            <Specs />
          </div>
        </section>

        <section id="equipements" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Confort" title="Équipements inclus" />
          <Equipment />
        </section>

        <section id="conseils" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Bon à savoir" title="Conseils pratiques" />
          <VanTips />
        </section>

        <section id="apps" className="bg-white/60 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Pendant le séjour" title="Apps recommandées" />
            <AppsRecommended />
          </div>
        </section>

        <section id="park4night" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Trouver un spot" title="Accès Park4night" />
          <Park4nightAccess />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="À savoir" title="Conditions & caution" />
          <RentalTerms />
        </section>

        <section id="contact" className="bg-white/60 px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="On se parle ?" title="Contact" />
          <Contact />
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <ScrollReveal className="font-display text-xl font-semibold text-terracotta-dark">
            Merci !
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-3 text-ink/70">
            {siteConfig.thanksMessage}
          </ScrollReveal>
          <ScrollReveal delay={140} className="mt-6 text-ink/70">
            {siteConfig.feedbackNote}
          </ScrollReveal>
          {siteConfig.contact.whatsappUrl && (
            <ScrollReveal delay={180} className="mt-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sauge px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-sauge-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Donner votre avis sur WhatsApp
              </a>
            </ScrollReveal>
          )}
          <ScrollReveal delay={240} className="mt-10 border-t border-sable-dark/50 pt-6">
            <blockquote className="flex items-start justify-center gap-2 italic text-ink/60">
              <Quote className="h-4 w-4 shrink-0 translate-y-1 text-sauge-dark" aria-hidden />
              <p>
                {siteConfig.finalQuote}
                <span className="mt-1 block text-sm not-italic font-medium text-ink/50">
                  — {siteConfig.finalQuoteAuthor}
                </span>
              </p>
            </blockquote>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
