import { skillsProficiency, skillsStudy } from "@/utils/data";

export const Skills = () => {
  return (
    <div id="skills" className="py-16">
      <h2 className="text-4xl font-bold">Tecnologias</h2>
      <div className="my-5">
        <h3 className="font-bold text-xl my-5 underline decoration-2 decoration-orange-400">
          Maior proficiência
        </h3>
        <div className="grid grid-cols-4 py-5">
          {skillsProficiency.map((item, index) => (
            <div
              className="text-center m-2 py-3 bg-white text-black font-bold"
              key={index}
            >
              <p className="hover:animate-pulse">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl my-5 underline decoration-2 decoration-orange-400">
          Estudando
        </h3>
        <div className="grid grid-cols-4 py-5">
          {skillsStudy.map((item, index) => (
            <div
              className="text-center m-2 py-3 bg-white text-black font-bold"
              key={index}
            >
              <p className="hover:animate-pulse">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
