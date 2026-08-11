import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Polices auto-hébergées (fichiers dans /fonts) plutôt que next/font/google :
// évite une dépendance réseau au moment du build.
const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "../fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const inter = localFont({
  variable: "--font-inter",
  src: [
    { path: "../fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  // À définir en prod (NEXT_PUBLIC_SITE_URL=https://votre-domaine) pour que les liens d'image OG soient absolus.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Le Tour en Cara — Fourgon aménagé Weinsberg Caratour 600",
  description:
    "Site privé pour les locataires du fourgon aménagé Weinsberg Caratour 600 : présentation, équipements et accès Park4night.",
  icons: {
    icon: "/globe.png",
  },
  openGraph: {
    title: "Le Tour en Cara — Fourgon aménagé Weinsberg Caratour 600",
    description:
      "Site privé pour les locataires du fourgon aménagé Weinsberg Caratour 600 : présentation, équipements et accès Park4night.",
    images: [
      {
        url: "/photos/exterieur-1.JPG",
        width: 1200,
        height: 630,
        alt: "Vue extérieure du fourgon Weinsberg 600 MQH",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Tour en Cara — Fourgon aménagé Weinsberg Caratour 600",
    description:
      "Site privé pour les locataires du fourgon aménagé Weinsberg Caratour 600 : présentation, équipements et accès Park4night.",
    images: ["/photos/exterieur-1.JPG"],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c96f4a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
