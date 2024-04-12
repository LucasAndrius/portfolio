"use client";
import Link from "next/link";
import { navbarLinks } from "../utils/data";
import { useState } from "react";
import { MenuOpen } from "./svg";
import { SocialLinks } from "./SocialLinks";

export const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pt-5">
      <div className="sm:hidden relative">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <MenuOpen />
        </button>
        <div
          className={`w-36 absolute bg-white text-black shadow-lg rounded-md p-2 top-full right-0 mt-2 transition-opacity duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul>
            {navbarLinks.map((link) => (
              <li key={link.id} className="my-2">
                <Link href={link.path[0]}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className={`${menuOpen ? "opacity-100" : "opacity-0"}`}>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="hidden sm:flex gap-8 items-center justify-between">
        <ul className="flex gap-8 max-w-fit">
          {navbarLinks.map((link) => (
            <li key={link.id} className="">
              <Link href={link.path[0]}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};
