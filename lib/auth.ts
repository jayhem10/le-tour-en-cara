/**
 * Utilitaires d'authentification pour l'accès au site.
 *
 * Utilise la Web Crypto API (`crypto.subtle`) plutôt que `node:crypto` car ce
 * module est importé à la fois par le middleware (runtime Edge) et par les
 * routes API (runtime Node) : `crypto.subtle` est disponible dans les deux.
 */

export const SESSION_COOKIE_NAME = "van_session";

/** 30 jours, en secondes. Filet de sécurité : l'invalidation par changement de mot de passe est le mécanisme principal. */
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

/**
 * Calcule un hash SHA-256 du mot de passe d'accès actuellement configuré.
 * Ce hash est utilisé comme valeur de cookie de session : dès que
 * `SITE_ACCESS_PASSWORD` change, le hash change, et tous les cookies émis
 * avec l'ancienne valeur deviennent invalides.
 */
export async function hashAccessPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
