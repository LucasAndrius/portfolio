import Link from "next/link";
import { navbarLinks } from "../utils/data";

export const NavbarFooter = () => {
  return (
    <div>
      <ul>
        {navbarLinks.map((link: any, index) => (
          <li key={index} className="font-bold p-1">
            <Link href={link.path[0]} className="p-1 hover:bg-orange-400">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
