import React from "react";
import Image from "next/image";
import IBaseSaction from "@/interfaces/IBaseSaction";

interface AboutSectionProps extends IBaseSaction {
    sectionId?: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ sectionId }) => (
    <div id={sectionId} className="flex flex-col lg:flex-row max-h-screen h-screen min-h-screen bg-slate-800">
        <div className="min-h-1/3 py-4 lg:w-2/3 flex   bg-orange-600 lg:bg-gray-200 justify-center items-center  space-y-6 ">
            <div className="flex items-center justify-center overflow-hidden bg-gray-200 w-72 h-72  lg:w-80 lg:h-80  rounded-full hover:animate-spin">
                <div className=" overflow-hidden bg-orange-500 w-64 h-64 lg:w-72 lg:h-72  rounded-full ">
                    <Image
                        src="/joao.jpeg"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>

        <div className="h-full py-4 lg:w-2/3 flex flex-col p-10 lg:p-20 bg-gray-200 font-bold text-black lg:justify-center  space-y-10 ">
            <h1 className="text-xl lg:text-3xl font-bold text-left text-black">João Pedro Moretti</h1>
            <span className="mt-10 lg:mt-5 text-justify text-sm lg:text-base ">


                Como alguém super ligado em tecnologia e sempre querendo aprender mais, eu tenho uma formação em Análise Técnica e Desenvolvimento de Sistemas e tô correndo atrás de um diploma em Engenharia de Software.
            </span>
            <span className="mt-1 text-justify text-sm lg:text-base font-bold text-black">

                Na minha jornada atual, estou estudando engenharia de software na faculdade e possuo um diploma Técnico em Análise e Desenvolvimento de Sistemas. Já realizei alguns projetos em React e estou ativamente buscando expandir ainda mais meu conhecimento.
            </span>


        </div>
    </div>
);

export default AboutSection;
