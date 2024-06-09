import React from "react";
import { Link } from "react-router-dom";
import { Link2, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="border-[1px] rounded-md overflow-hidden shadow-lg relative cursor-pointer font-inika">
      
      <div className="w-full ">
        <img
          src={project.img}
          className="w-full h-44 object-cover"
          alt="Project"
        />
      </div>
      
      
      <div className="flex p-2 flex-col w-full gap-2 justify-between">
        <div className="text-xl font-semibold">{project.title}</div>
        <div className="text-gray-400 text-sm h-10 items-center flex ">{project.desc}</div>
        <div className="flex border-t-[1px] pt-2 justify-between text-sm">
          <Link target="_blank" to={project.url} className="flex">
            <Link2 size={20} className="mr-2" />
            <span>Hosted Link</span>
          </Link>
          <Link target="_blank" to={project.github} className="flex">
            <Github size={20} className="mr-2" />
            <span> Github Link </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
