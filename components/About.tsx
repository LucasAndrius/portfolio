import Image from "next/image";
import Hello from "../components/gif/hello.gif";

export const About = () => {
  return (
    <div className="py-5 max-w-[60%]">
      <div>
        <div className="flex items-center py-5">
          <h2 className="text-4xl">Olá, bem-vindo ao meu portfólio!</h2>
          <Image src={Hello} alt="" width={35} className="mb-[0.5rem] p-1" />
        </div>
        <p>
          Aqui, apresento meus projetos, um breve perfil e o que estou estudando
          atualmente. Sou estudante de{" "}
          <strong className="text-orange-400">
            Análise e Desenvolvimento de Sistemas
          </strong>
          , <br /> com aproximadamente 3 anos de experiência{" "}
          <strong className="text-orange-400">intermitente</strong> em
          desenvolvimento. Estou em busca de oportunidades na área, seja em uma
          vaga de estágio ou posição júnior, para aplicar e expandir meus{" "}
          <a href="#conhecimento" className="text-orange-400 underline">
            conhecimentos
          </a>
          .
        </p>
      </div>
    </div>
  );
};
