import IBaseSaction from "@/interfaces/IBaseSaction";
import React from "react";

interface ProjectsSectionProps extends IBaseSaction {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sectionId }) => (
  <div
    id={sectionId}
    className="flex flex-col items-center min-h-screen bg-white lg:px-6 pt-8"
  >
    <h1 className="font-bold text-3xl">{'<'}PROJECTS{'/>'}</h1>
    <span className="text-lg mt-4 mb-4">
      Meu projeto favorito é a minha Pokédex. Você pode acessá-la aqui.
    </span>
    <a
      href="https://pokedex-rho-sepia.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="pokedex.gif"
        alt="Pokedex"
        className="cursor-pointer"
      />
    </a>
  </div>
);

export default ProjectsSection;
