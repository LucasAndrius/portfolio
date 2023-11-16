import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas.dev",
  description:
    "Bem-vindo ao meu portfólio, aqui compartilho meu projetos, um pouco sobre mim e futuramente algumas ideias em meu blog ;)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="max-w-5xl mx-auto py-5">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-H799PHHSLE" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
