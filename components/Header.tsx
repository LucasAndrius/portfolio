import Link from "next/link";
import Image from "next/image";
import Github from "../components/svg/github.svg";
import Hello from "../components/gif/hello.gif";

export const Header = () => {
  return (
    <header className="my-5 ">
      <h1 className="flex text-6xl font-bold underline decoration-4 decoration-orange-400 ">
        Lucas
        <a href="/">
          <span className="text-orange-400 hover:text-orange-500">
            <span>.dev</span>
          </span>
        </a>
      </h1>
      <div className="flex text-sm">
        <div className="mr-1 max-w-[150px]">Front-End Developer</div>
        {/*<div className="flex justify-end items-center min-w-[160px] bg-white ">
          <Link href="" target="_blank" className="mr-2">
            <Image
              src={Github}
              alt=""
              height={16}
              width={16}
              className="text-orange-400 text-sm"
            />
          </Link> 
        </div>*/}
      </div>
    </header>
  );
};
