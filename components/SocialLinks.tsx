import Link from "next/link";
import { Github, Instagram, Linkedin } from "./svg";

export const SocialLinks = () => {
  return (
    <div className="flex justify-end items-center min-w-[180px] ">
      <Link
        href="https://github.com/LucasAndrius"
        target="_blank"
        className="mr-2"
      >
        <Github className="text-xl hover:text-orange-400 hover:animate-pulse" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/lucas-andrius-oliviera/"
        target="_blank"
        className="mr-2"
      >
        <Linkedin className="text-xl hover:text-orange-400 hover:animate-pulse" />
      </Link>
      <Link
        href="https://www.instagram.com/lukas_andrius/"
        target="_blank"
        className="mr-2"
      >
        <Instagram className="text-xl hover:text-orange-400 hover:animate-pulse" />
      </Link>
    </div>
  );
};
