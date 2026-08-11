# Le Tour en Cara

Site one-page privé pour présenter le fourgon aménagé (Weinsberg Caratour 600) à mes locataires, et leur donner l'accès à Park4night. Next.js + TypeScript + Tailwind CSS, sans base de données : tout le contenu vit dans [`config/site.ts`](config/site.ts).

⚠️ **Ce site est privé et ne doit jamais être rendu public** (voir la section [Confidentialité](#confidentialité--non-indexation)).

## Démarrer en local

```bash
npm install
cp .env.local.example .env.local   # puis renseigner les vraies valeurs
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Vous serez redirigé vers `/login` : entrez la valeur de `SITE_ACCESS_PASSWORD`.

## Modifier le contenu du site

Tout se passe dans **[`config/site.ts`](config/site.ts)**, un fichier TypeScript typé (pas de BDD, pas de CMS). Chaque bloc du site correspond à une clé de `siteConfig` :

| Section du site                      | Clé dans `site.ts` | Ce qu'on peut changer                                                        |
| ------------------------------------- | ------------------- | ----------------------------------------------------------------------------- |
| Hero / titre / description            | `general`            | Nom du van, modèle, année, accroche, description                              |
| Galerie photo                         | `gallery`            | Liste `{ src, alt }` — ajoutez vos fichiers dans `public/photos/` et référencez-les ici |
| Bloc gabarit (hauteur/largeur/longueur)| `dimensions`         | Les 3 dimensions mises en avant dans la section « Caractéristiques »          |
| Caractéristiques techniques           | `specs`              | Liste `{ icon, label, value }` (icônes depuis `lucide-react`)                 |
| Équipements inclus                    | `equipment`          | Liste de catégories `{ icon, title, items[] }` (Conduite, Vie à bord, Cuisine / Repas, Toilette, Extérieur, Autonomie) |
| Comment ça marche (Park4night)        | `howItWorks`         | Liste `{ title, description }`, autant d'étapes que voulu                     |
| Apps recommandées                     | `apps`               | Liste `{ id, name, description, icon, appStoreUrl?, googlePlayUrl?, androidNote? }` — ajoutez/retirez une app librement |
| Contact                                | `contact`            | `phone`, `whatsappUrl` (tous deux optionnels)                                 |
| Lien vers l'annonce                   | `listingUrl`, `listingNote` | URL de l'annonce (ex: Yescapa) et texte affiché à côté                 |
| Conditions de location                | `rentalConditions`   | Liste `{ label, value }` (voyage à l'étranger, permis, animaux, fumeur, km...) |
| Caution                               | `deposit`            | `description`, `address`, `mapsUrl` (lien Google Maps vers l'adresse)         |
| Checklist retour du véhicule          | `returnGuidelines`   | Liste `{ icon, text }` (propreté, linge, déchets, casse/réassort), chaque item a sa propre icône |
| Message de remerciement               | `thanksMessage`, `feedbackNote`, `finalQuote`, `finalQuoteAuthor` | Texte de fin de page, invitation à laisser un avis (WhatsApp) et citation de clôture |

Les photos vont dans `public/photos/` (des SVG de démonstration sont fournis, à remplacer par vos vraies photos au même chemin ou en adaptant `gallery` dans `site.ts`).

## Variables d'environnement

Voir [`.env.local.example`](.env.local.example) pour la liste complète :

- `SITE_ACCESS_PASSWORD` — mot de passe d'accès à l'ensemble du site (page `/login`).
- `NEXT_PUBLIC_PARK4NIGHT_LOGIN` — identifiant Park4night, affiché publiquement une fois connecté au site (pas sensible, exposé côté client).
- `PARK4NIGHT_PASSWORD` — mot de passe Park4night, **jamais présent dans le HTML** : il n'est renvoyé qu'à la demande via la route `GET /api/park4night`, elle-même protégée par le proxy d'accès au site (`proxy.ts`).

> Note : Next.js 16 a renommé la convention `middleware.ts` en `proxy.ts` (même rôle, même API). Ce projet utilise donc `proxy.ts` à la racine plutôt que `middleware.ts`.

## Changer le mot de passe entre deux locations

Le mécanisme central du site : **changer `SITE_ACCESS_PASSWORD` révoque immédiatement l'accès du locataire précédent**, sans action supplémentaire.

Pourquoi ça marche : à la connexion, `/app/api/login/route.ts` ne stocke pas un simple booléen dans le cookie, mais un hash SHA-256 du mot de passe *au moment de la connexion*. À chaque requête, `proxy.ts` (l'équivalent moderne du middleware Next.js, voir note ci-dessous) recalcule le hash du mot de passe **actuellement** défini dans l'environnement et le compare au cookie. Si le mot de passe a changé depuis, le hash ne correspond plus → redirection automatique vers `/login`, même si l'ancien locataire n'a jamais cliqué sur « déconnexion » et même si son cookie n'a pas expiré.

Étapes :

1. **En local** : modifier `SITE_ACCESS_PASSWORD` dans `.env.local`, puis redémarrer `npm run dev`.
2. **Sur Vercel** : Project Settings → Environment Variables → modifier `SITE_ACCESS_PASSWORD` → **redéployer** (un changement de variable d'environnement nécessite un redéploiement pour être pris en compte).
3. C'est tout : dès que le nouveau build/process tourne avec la nouvelle valeur, tous les cookies émis avec l'ancien mot de passe sont invalides.

Il existe aussi un bouton « Se déconnecter » discret dans le pied de page, utile si vous voulez couper l'accès sans changer le mot de passe (ex: fin de location anticipée).

## Confidentialité / non-indexation

Le site n'est partagé qu'aux locataires et ne doit jamais être trouvable :

- `public/robots.txt` interdit tout crawl (`Disallow: /`).
- Balise `<meta name="robots" content="noindex, nofollow, noarchive" />` générée via l'API `metadata` de Next.js dans `app/layout.tsx` (et redéfinie sur `/login`).
- Header HTTP `X-Robots-Tag: noindex, nofollow, noarchive` renvoyé pour toutes les routes via `next.config.ts`, et repris par `proxy.ts` en filet de sécurité supplémentaire.
- Aucun `sitemap.xml` n'est généré, et le site ne doit **jamais** être soumis à Google Search Console ou tout autre outil de referencement.
- Si vous déployez sur Vercel : évitez un nom de domaine trop évident/mémorable pour limiter les découvertes fortuites. Mais gardez en tête que **même si quelqu'un devine ou trouve l'URL, l'accès reste bloqué par le mot de passe** (`SITE_ACCESS_PASSWORD`) — c'est la vraie barrière de sécurité, pas l'obscurité du nom de domaine.

## Déployer sur Vercel

1. Pousser le dépôt sur GitHub/GitLab et importer le projet dans Vercel.
2. Renseigner les 3 variables d'environnement (`SITE_ACCESS_PASSWORD`, `NEXT_PUBLIC_PARK4NIGHT_LOGIN`, `PARK4NIGHT_PASSWORD`) dans Project Settings → Environment Variables.
3. Déployer. Le site build en statique/ISR selon les pages ; les routes `/api/login`, `/api/logout` et `/api/park4night` tournent en fonctions serverless.
4. Ne pas ajouter le domaine à Google Search Console, ne pas partager le lien publiquement.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4 (thème custom van-life dans `app/globals.css`)
- `lucide-react` pour les icônes
- Aucune base de données, aucun CMS

# le-tour-en-cara
