import { About } from "@/components/About";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavbarMenu } from "@/components/NavbarMenu";
import { Skills } from "@/components/Skills";
import { getProjectLatest } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lucas.dev | Página Inicial",
  description:
    "Bem-vindo ao meu portfólio, aqui compartilho meu projetos, um pouco sobre mim e futuramente algumas ideias em meu blog ;)",
};

export default async function Home() {
  const project = await getProjectLatest();

  // Limita o texto do PortableText a 300 caracteres
  const limitedText = project.description.map((block: any) => ({
    ...block,
    children: block.children.map((child: any) => ({
      ...child,
      text:
        typeof child.text === "string" && child.text.length > 300
          ? `${child.text.slice(0, 300)}...`
          : child.text,
    })),
  }));

  return (
    <div>
      <Header />
      <NavbarMenu />
      <main>
        <About />
        <div className="mt-10 bg-gray-900 px-4 rounded-lg">
          <div className="flex items-center justify-between pt-10 px-10">
            <h2 className="text-4xl font-bold">Último projeto</h2>
            <Link href="/projects" className="underline hover:text-orange-400">
              Ver todos
            </Link>
          </div>
          <div className=" p-10  flex gap-8  rounded-md">
            <div>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="object-cover rounded-md "
                />
              )}
            </div>
            <div className="max-w-[450px] text-left">
              <h3 className="max-w-[350px] font-bold text-xl">
                {project.name}
              </h3>
              <div className="my-5">
                <PortableText value={limitedText} />
              </div>
              <div className="pt-2 hover:animate-pulse">
                <ButtonLink
                  label="ver mais..."
                  url={`/projects/${project.slug}`}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Skills />
      <Footer />
    </div>
  );
}
