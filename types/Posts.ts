import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  description: PortableTextBlock[];
  slug: string;
  image: string;
  alt: string;
  url: string;
  content: PortableTextBlock[];
};
