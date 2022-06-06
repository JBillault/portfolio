import React from "react";
import tetrisImg from "../public/images/tetris.png";
import inquizitorImg from "../public/images/inquizitor.png";
import couabouarImg from "../public/images/couabouar.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projets
        </p>
        <h2 className="py-4">{`Ce que j'ai réalisé`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tetris"
            bgImg={tetrisImg}
            projectUrl="/tetris"
            langage="Javascript"
          />
          <ProjectItem
            title="Inquiz'itor"
            bgImg={inquizitorImg}
            projectUrl="/inquizitor"
            langage="React JS"
          />
          <ProjectItem
            title="Cou-a-bou-ar"
            bgImg={couabouarImg}
            projectUrl="/couabouar"
            langage="React JS"
          />
          <ProjectItem
            title="Monoceros"
            bgImg={tetrisImg}
            projectUrl="/monoceros"
            langage="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
