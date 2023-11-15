import React from "react";

import { getProjects } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import { NavbarMenu } from "@/components/NavbarMenu";
import { PortableText } from "@portabletext/react";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div>
      <header className="my-5">
        <h1 className="text-6xl font-bold underline decoration-4 decoration-orange-400">
          Meus Projetos
        </h1>
      </header>
      <NavbarMenu />
      <main className="mt-5 grid grid-cols-1 bg-gray-900 px-4 py-6 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="bg-orange-100 border-2 border-orange-100 hover:border-orange-400 rounded-md scale-100 p-2 hover:scale-105 duration-500"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-md "
              />
            )}
            <div className="mt-4 font-extrabold text-gray-800">
              {project.name}
            </div>
            <div className="text-gray-500 text-sm">
              <PortableText value={project.description} />
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
