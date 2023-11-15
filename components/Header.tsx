import { SocialLinks } from "./SocialLinks";

export const Header = () => {
  return (
    <header className="my-5 ">
      <h1 className="flex text-7xl font-bold underline decoration-4 decoration-orange-400 ">
        Lucas
        <a href="/">
          <span className="text-orange-400 hover:text-orange-500">
            <span>.dev</span>
          </span>
        </a>
      </h1>
      <div className="flex text-lg">
        <div className="mr-1 font-bold">Front-End Developer</div>
        <SocialLinks />
      </div>
    </header>
  );
};
