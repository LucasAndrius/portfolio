import { PortableTextBlock, Reference } from "sanity";

export type Info = {
  _id: string;
  title: string;
  subtitle: string;
  imageHero: string;
  alt: string;
  bio: PortableTextBlock[];
};
