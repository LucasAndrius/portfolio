import Container from "./Container";
import { NavbarMenu } from "./NavbarMenu";
import { SocialLinks } from "./SocialLinks";

export const Header = () => {
  return (
    <Container>
      <div className="flex justify-end md:block ">
        <NavbarMenu />
      </div>
    </Container>
  );
};
