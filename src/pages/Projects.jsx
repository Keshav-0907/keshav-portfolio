import React from "react";
import { useState } from "react";
import ProjectData from "../data/ProjectData";
import ProjectCard from "../components/ProjectCard";

const Categories = [
  {
    id: 1,
    name: "All",
    value: "all",
  },
  {
    id: 2,
    name: "Front End",
    value: "frontend",
  },
  {
    id: 3,
    name: "Back End",
    value: "backend",
  },
  {
    id: 4,
    name: "Machine Learning",
    value: "machineLearning",
  },
  {
    id: 5,
    name: "Blockchain",
    value: "blockchain",
  },
  {
    id: 6,
    name: "Generative AI",
    value: "generativeAI",
  }
];

const Projects = ({colorMode}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects =
    activeCategory === "all"
      ? ProjectData
      : ProjectData.filter((project) => project.category.includes(activeCategory));

  console.log(activeCategory);

  console.log(filteredProjects);

  return (
    <div className="md:px-20 px-5 py-10 md:my-10 flex flex-col gap-5 font-inika">
      <div>
        <div className="md:text-4xl text-2xl ">My Projects</div>
      </div>
      <div className="flex gap-4 overflow-x-auto md:overflow-hidden">
  {Categories.map((category) => (
    <div
      onClick={() => handleCategory(category.value)}
      key={category.id}
      className={`md:text-base text-xs md:px-2 px-3 md:py-1 rounded-full w-fit items-center flex cursor-pointer text-center
        ${activeCategory === category.value
          ? `${colorMode === 'dark' ? 'bg-white text-black border-white' : 'bg-black text-white border-black'} border-2`
          : `${colorMode === 'dark' ? 'border-white' : 'border-black'} border-2`
        }`}
    >
      {category.name}
    </div>
  ))}
</div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
