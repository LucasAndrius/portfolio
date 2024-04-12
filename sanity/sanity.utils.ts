import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";
import { Post } from "@/types/Posts";
import { Info } from "@/types/Info";
import { Technologies } from "@/types/Technologies";

export async function getInfos(): Promise<Info[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "info"] | order(_createdAt desc) {
      _id,
      title,
      subtitle,
      "imageHero": image.asset->url,
      bio,
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getTechnologies(): Promise<Technologies[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "technology"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      slug,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug, next: { revalidate: 600 } }
  );
}

export async function getProjectLatest(): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(_createdAt desc) [0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getBlogPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      subtitle,
      description[0],
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      content,
      category[]->,
    }`,
    { next: { revalidate: 600 } }
  );
}

export async function getBlogPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      subtitle,
      description[0],
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      content,
      category[]->,
    }`,
    { next: { revalidate: 600 }, slug }
  );
}
