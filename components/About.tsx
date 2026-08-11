import { Quote } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Mot de bienvenue de la famille propriétaire : le site informe, il ne vend rien. */
export function About() {
  const { intro, paragraphs, quote, quoteAuthor } = siteConfig.about;

  return (
    <Card className="mx-auto max-w-3xl">
      <ScrollReveal className="mb-6 font-display text-2xl font-semibold text-terracotta-dark">
        {intro}
      </ScrollReveal>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <ScrollReveal key={paragraph} delay={index * 60} className="text-ink/80">
            {paragraph}
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={paragraphs.length * 60} className="mt-8 border-t border-sable-dark/50 pt-6">
        <blockquote className="flex gap-3 italic text-ink/70">
          <Quote className="h-5 w-5 shrink-0 text-sauge-dark" aria-hidden />
          <p>
            {quote}
            <span className="mt-1 block text-sm not-italic font-medium text-ink/50">— {quoteAuthor}</span>
          </p>
        </blockquote>
      </ScrollReveal>
    </Card>
  );
}
