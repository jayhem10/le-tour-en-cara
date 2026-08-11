import { NextResponse } from "next/server";

/**
 * Retourne le mot de passe Park4night à la demande uniquement (clic sur
 * "afficher"), pour éviter qu'il apparaisse en clair dans le HTML statique.
 * Cette route est protégée par le middleware au même titre que le reste du site.
 */
export async function GET() {
  const password = process.env.PARK4NIGHT_PASSWORD;

  if (!password) {
    return NextResponse.json(
      { error: "Le mot de passe Park4night n'est pas configuré sur le serveur." },
      { status: 500 },
    );
  }

  return NextResponse.json({ password });
}
