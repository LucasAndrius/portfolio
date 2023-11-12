import { getProject } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    project: string;
  };
};

export default async function ({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-bold py-10 underline decoration-6 decoration-orange-400">
          {project.name}
        </h1>
        <a
          href={project.name}
          title="View Project"
          target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          View Project
        </a>
      </header>
      <div>{project.description}</div>
      <div>
        <PortableText value={project.content} />
      </div>
      {/**
       * <Image
        src={project.image}
        alt={project.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="mt-10 border-2 border-orange-400 object-cover"
      />
       */}
    </div>
  );
}
