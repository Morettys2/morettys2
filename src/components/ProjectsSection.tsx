import IBaseSaction from "@/interfaces/IBaseSaction";
import React from "react";

interface ProjectsSectionProps extends IBaseSaction {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sectionId }) => (
  <div
    id={sectionId}
    className="flex flex-col items-center min-h-full bg-white lg:px-6 pt-8"
  >
    <h1 className="font-bold text-3xl">{'<'}PROJECTS{'/>'}</h1>
    <div className="flex justify-around w-full">
      <div className="flex flex-col items-center mb-8">
        <a
          href="https://pokedex-rho-sepia.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="pokedex.gif"
            alt="Pokedex"
            className="cursor-pointer h-auto max-w-full"
            style={{ maxWidth: "200px" }}
          />
        </a>
        <span className="text-lg mt-4 mb-4">Projeto de uma Pokédex.</span>
      </div>

      <div className="flex flex-col items-center mb-8">
        <a
          href="https://spotify-clone-chi-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="spo.gif"
            alt="Spotify Clone"
            className="cursor-pointer h-auto max-w-full"
            style={{ maxWidth: "150px" }}
          />
        </a>
        <span className="text-lg mt-4 mb-4">Projeto de clone do Spotify.</span>
      </div>
    </div>
  </div>
);

export default ProjectsSection;
