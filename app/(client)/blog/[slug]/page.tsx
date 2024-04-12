import Container from "@/components/Container";
import { Header } from "@/components/Header";
import { RichTextComponents } from "@/components/RichTextComponent";
import { H1 } from "@/components/Titltes/H1";
import { getBlogPost } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const post = await getBlogPost(params.slug);

  return (
    <Container>
      <Link href="./" className="">
        Voltar
      </Link>
      <div className="md:mx-56 py-10">
        <H1 title={post.title} />
        <PortableText value={post?.content} components={RichTextComponents} />
      </div>
    </Container>
  );
};

export default page;
