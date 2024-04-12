import Link from "next/link";
import { Github, Instagram, Linkedin } from "./svg";

export const SocialLinks = () => {
  return (
    <div className="flex my-5 items-center justify-evenly">
      <Link
        href="https://github.com/LucasAndrius"
        target="_blank"
        className="mr-2"
      >
        <Github className="text-xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/lucas-andrius-oliviera/"
        target="_blank"
        className="mr-2"
      >
        <Linkedin className="text-xl" />
      </Link>
      <Link
        href="https://www.instagram.com/lucasandrius.dev/"
        target="_blank"
        className="mr-2"
      >
        <Instagram className="text-xl " />
      </Link>
    </div>
  );
};
