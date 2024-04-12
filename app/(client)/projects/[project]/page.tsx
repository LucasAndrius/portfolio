import { ExternalLink } from "@/components/svg";
import { getProject } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Container from "@/components/Container";
import Link from "next/link";
import { H1 } from "@/components/Titltes/H1";
import { RichTextComponents } from "@/components/RichTextComponent";

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
      <Container>
        <Link href="./">Voltar</Link>

        <div className="md:mx-56 py-10">
          <header className="flex flex-col md:flex-row items-center justify-between">
            <div className="my-3">
              <H1 title={project.name} />
            </div>
            {project.url && (
              <a
                href={project.url}
                title="View Project"
                target="blank"
                rel="noopener noreferrer"
                className="flex my-5 md:my-0 ml-10 md:ml-0 md:justify-end gap-2 min-w-[200px] items-center underline "
              >
                <div>View Project</div>
                <ExternalLink className="text-sm md:text-md text-white" />
              </a>
            )}
          </header>

          <PortableText
            value={project?.content}
            components={RichTextComponents}
            key={project._id}
          />
        </div>
      </Container>
    </div>
  );
}
