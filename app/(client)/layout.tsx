import type { Metadata } from "next";
import { Inter, PT_Sans_Caption } from "next/font/google";
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
    <html lang="pt-br" className="!scroll-smooth bg-gray-900 text-white">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-H799PHHSLE" />
      <body
        className={`${inter.className} px-3 sm:px-10 lg:grid lg:place-items-center`}
      >
        <div className="my-6 sm:my-10 max-w-7xl bg-black rounded-xl min-h-[33vh] w-full ">
          {children}
        </div>
      </body>
    </html>
  );
}
