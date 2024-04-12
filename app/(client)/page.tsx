import Container from "@/components/Container";
import { Header } from "@/components/Header";
import { RichTextComponents } from "@/components/RichTextComponent";
import { H1 } from "@/components/Titltes/H1";
import { H2 } from "@/components/Titltes/H2";
import { getInfos, getTechnologies } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lucas.dev | Página Inicial",
  description:
    "Bem-vindo ao meu portfólio, aqui compartilho meu projetos, um pouco sobre mim e futuramente algumas ideias em meu blog ;)",
};

export default async function Home() {
  const [infos, techs] = await Promise.all([getInfos(), getTechnologies()]);

  return (
    <div>
      <Header />
      <Container>
        {infos.length > 0 ? (
          infos.map((info) => (
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16">
              <div className="md:max-w-[70vw] lg:max-w-[40vw]">
                <div key={info._id}>
                  <H1 title={info.title} subtitle={info.subtitle} />
                </div>
                <div className="my-3">
                  <PortableText
                    value={info.bio}
                    components={RichTextComponents}
                  />
                </div>
              </div>
              <div className="min-w-[20vw]">
                <H2 title="Tecnologias" />
                <div className="bg-gray-800 rounded-md px-3 py-3 my-3 w-fit">
                  <ul className="flex flex-wrap justify-center gap-4 max-w-sm">
                    {techs.map((tech) => (
                      <li className="flex p-3 bg-gray-900" key={tech._id}>
                        <Image
                          src={tech.image}
                          height={40}
                          width={40}
                          alt={tech.alt}
                          style={{ objectFit: "cover" }}
                          quality={100}
                          className="h-7 w-7 md:min-h-[25px] lg:min-h-[40px] md:mind-w-[25px] lg:min-w-[40px] hover:scale-105"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Não foi possível obter os dados</div>
        )}
      </Container>
    </div>
  );
}
