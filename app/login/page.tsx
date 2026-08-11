import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Connexion — Site privé",
  robots: { index: false, follow: false, nocache: true },
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-sable/40 px-4 py-12">
      <LoginForm />
    </div>
  );
}
