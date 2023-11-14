import { About } from "@/components/About";
import { ButtonLink } from "@/components/ButtonLink";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
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
      <Navbar />
      <About />
      <main className="mt-10 bg-gray-900 px-4 rounded-lg text-center">
        <h2 className="text-2xl font-bold pt-10">Último projeto</h2>
        <div className=" p-10 m-10 flex gap-8  rounded-md">
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
          <div className="max-w-[400px] text-left">
            <h3 className="max-w-[350px] font-bold text-xl">{project.name}</h3>
            <div className="my-5">
              <PortableText value={limitedText} />
            </div>
            <ButtonLink label="ver mais..." url={`/projects/${project.slug}`} />
          </div>
        </div>
      </main>
    </div>
  );
}
