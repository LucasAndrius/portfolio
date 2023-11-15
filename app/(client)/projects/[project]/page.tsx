import { NavbarMenu } from "@/components/NavbarMenu";
import { ExternalLink } from "@/components/svg";
import { getProject } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";

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
        {project.url && (
          <a
            href={project.url}
            title="View Project"
            target="blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center underline hover:text-orange-400"
          >
            <div>View Project</div>
            <ExternalLink className="text-md text-white" />
          </a>
        )}
      </header>
      <NavbarMenu />
      <div>
        <PortableText value={project.description} />
      </div>
      <hr />
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
