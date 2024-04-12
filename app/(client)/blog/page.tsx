import Container from "@/components/Container";
import { Header } from "@/components/Header";
import { H1 } from "@/components/Titltes/H1";
import { H2 } from "@/components/Titltes/H2";
import { getBlogPosts } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";

export default async function BlogPage() {
  const getPosts = await getBlogPosts();
  return (
    <div>
      <Header />
      <Container>
        <H1 title="Meu blog " />
      </Container>
      <div>
        <Container>
          {getPosts ? (
            getPosts.map((post) => (
              <ul key={post._id} className="group">
                <li className="mb-10 bg-white text-black px-10 py-5 rounded-xl transition duration-300 hover:border-yellow-300 border-2 group-hover:scale-105">
                  <div className="flex flex-col md:flex-row justify-between">
                    <Link href={`blog/${post.slug}`}>
                      <H2 title={post.title} subtitle={post.subtitle} />
                    </Link>
                    <div className="flex flex-wrap gap-2 text-xs my-5 md:my-0 ">
                      <p>Publicado em:</p>
                      {new Date(post._createdAt)
                        .toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(/de/g, "")}
                    </div>
                  </div>
                  <div className="my-3">
                    <PortableText value={post.description} key={post._id} />
                  </div>
                </li>
              </ul>
            ))
          ) : (
            <ul>
              <li>Nenhum Post foi encontrado</li>
            </ul>
          )}
        </Container>
      </div>
    </div>
  );
}
