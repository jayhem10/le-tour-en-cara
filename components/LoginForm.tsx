"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

/** Formulaire de connexion : poste le mot de passe vers /api/login. */
export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Mot de passe incorrect.");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-sm rounded-3xl border border-sable-dark/60 bg-white/90 p-8 shadow-lg shadow-ink/10">
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-cream">
          <Lock className="h-6 w-6" aria-hidden />
        </span>
        <h1 className="font-display text-xl font-semibold text-ink">{siteConfig.general.vanName}</h1>
        <p className="text-sm text-ink/60">Site privé — entrez le mot de passe fourni pour accéder au contenu.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm font-medium text-ink">
            Mot de passe d&apos;accès
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "password-error" : undefined}
            className="rounded-xl border border-sable-dark/60 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
          />
        </div>

        {error && (
          <p id="password-error" role="alert" className="text-sm font-medium text-terracotta-dark">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" disabled={loading} className="mt-2 justify-center">
          {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
          Accéder au site
        </Button>
      </form>
    </div>
  );
}
