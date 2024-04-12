import React from "react";

import { getProjects } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@portabletext/react";
import { Header } from "@/components/Header";
import { H1 } from "@/components/Titltes/H1";
import Container from "@/components/Container";
import { H2 } from "@/components/Titltes/H2";
import { RichTextComponents } from "@/components/RichTextComponent";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <Header />
      <Container>
        <H1 title="Projetos" />
      </Container>
      <div>
        <Container>
          <div>
            {projects ? (
              projects.map((project) => (
                <ul key={project._id} className="group">
                  <Link href={`projects/${project.slug}`}>
                    <li className="mb-10 bg-white text-black px-10 py-5 rounded-xl transition duration-300 hover:border-yellow-300 border-2 group-hover:scale-105">
                      <div className="flex flex-col md:flex-row justify-between">
                        <H2 title={project.name} />

                        <div className="flex flex-wrap gap-2 text-xs my-5 md:my-0 ">
                          <p>Publicado em:</p>
                          {new Date(project._createdAt)
                            .toLocaleDateString("pt-BR", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                            .replace(/de/g, "")}
                        </div>
                      </div>
                      <div className="text-sm my-3">
                        <PortableText
                          value={project.description}
                          components={RichTextComponents}
                          key={project._id}
                        />
                      </div>
                    </li>
                  </Link>
                </ul>
              ))
            ) : (
              <ul>
                <li>Nenhum Projeto foi encontrado</li>
              </ul>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
