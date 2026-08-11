import { NextResponse, type NextRequest } from "next/server";
import { hashAccessPassword, SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const sitePassword = process.env.SITE_ACCESS_PASSWORD;

  if (!sitePassword) {
    return NextResponse.json(
      { error: "Le mot de passe d'accès n'est pas configuré sur le serveur." },
      { status: 500 },
    );
  }

  let password: unknown;
  try {
    const body = (await request.json()) as { password?: unknown };
    password = body.password;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (typeof password !== "string" || password.length === 0 || password !== sitePassword) {
    return NextResponse.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }

  const token = await hashAccessPassword(sitePassword);

  const response = NextResponse.json({ success: true });
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}
