import Link from "next/link";
import { navbarLinks } from "../utils/NavbarLinks";

export const Navbar = () => {
  return (
    <div className="pt-5">
      <hr />
      <ul className="flex">
        {navbarLinks.map((link: any, index) => (
          <li key={index} className="font-bold p-1 mr-2 hover:bg-orange-400">
            <Link href={link.path[0]}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
