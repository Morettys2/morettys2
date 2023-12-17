import React from "react";
import Image from "next/image";
import IBaseSaction from "@/interfaces/IBaseSaction";

interface AboutSectionProps extends IBaseSaction {
    sectionId?: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ sectionId }) => (
    <div id={sectionId} className="flex flex-col lg:flex-row max-h-screen h-screen min-h-screen bg-slate-800">
        <div className="min-h-1/3 py-4 lg:w-2/3 flex   bg-orange-600 lg:bg-black justify-center items-center  space-y-6 ">
            <div className="flex items-center justify-center overflow-hidden bg-black w-72 h-72  lg:w-80 lg:h-80  rounded-full hover:animate-spin">
                <div className=" overflow-hidden bg-orange-500 w-64 h-64 lg:w-72 lg:h-72  rounded-full ">
                    <Image
                        src="/joao.jpeg"
                        width={600}
                        height={600}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>

        <div className="h-full py-4 lg:w-2/3 flex flex-col p-10 lg:p-20 bg-black text-white lg:justify-center  space-y-6 ">
            <h1 className="text-xl lg:text-3xl font-bold text-left text-orange-400">João Pedro Moretti</h1>
            <span className="mt-10 lg:mt-5 text-justify text-sm lg:text-base ">
             As a fervent technology enthusiast with an insatiable desire for continuous development, I bring a background in Technical Analysis and Systems Development, currently pursuing a degree in Software Engineering.
            </span>
            <span className="mt-1 text-justify text-sm lg:text-base text-orange-400">

                In my current journey, I am studying software engineering and hold a degree in Technical Analysis and Systems Development. I have already undertaken several projects in React and am actively seeking to expand my knowledge further.e.
            </span>

            <span className="mt-1 text-justify text-sm lg:text-base ">

            
My background doesnt yet include work experience, as I am currently dedicated to my studies after completing my degree. Nevertheless, I am completely open and willing to learn whatever is necessary to contribute efficiently and excellently to future projects.
            </span>
        </div>
    </div>
);

export default AboutSection;
