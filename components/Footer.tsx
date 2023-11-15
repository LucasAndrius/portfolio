import { NavbarFooter } from "./NavbarFooter";

export const Footer = () => {
  return (
    <div className="my-14">
      <hr />
      <div className="grid grid-cols-[30%_70%] py-10">
        <div>
          <div className="p-2 mb-2">Páginas</div>
          <NavbarFooter />
          <div className="p-2 mt-2">Sitemap.xlm</div>
        </div>
        <div>Links redes</div>
      </div>
      <div className="text-center">
        <p>Criado por Lucas Andrius de Oliveira</p>
      </div>
    </div>
  );
};
