import { NextResponse, type NextRequest } from "next/server";
import { hashAccessPassword, SESSION_COOKIE_NAME } from "@/lib/auth";

/**
 * Protège l'ensemble du site : toute requête sans cookie de session valide
 * est redirigée vers /login. Le hash attendu est recalculé à chaque requête
 * à partir du mot de passe actuel en env, donc un changement de
 * `SITE_ACCESS_PASSWORD` invalide immédiatement tous les cookies existants.
 */
export async function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const sitePassword = process.env.SITE_ACCESS_PASSWORD;

  const expectedHash = sitePassword ? await hashAccessPassword(sitePassword) : null;
  const isAuthenticated = Boolean(sessionCookie && expectedHash && sessionCookie === expectedHash);

  const response = isAuthenticated
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/login", request.url));

  // Filet de sécurité en plus de la balise meta et du robots.txt.
  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  return response;
}

export const config = {
  matcher: [
    // photos/globe.png restent accessibles sans session : nécessaires pour que l'aperçu og:image
    // fonctionne quand le lien est partagé (le crawler n'a pas de cookie de session).
    // mentions-legales doit rester accessible même sans connexion (obligation légale).
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|login|api/login|api/logout|photos|globe.png|mentions-legales).*)",
  ],
};
