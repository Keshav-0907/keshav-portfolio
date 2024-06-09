import React from "react";
import { ReactIcon, ReduxIcon, NextJSIcon,AWSIcon, TypeScriptIcon, JavaScriptIcon, TailwindIcon, PythonIcon, NodeJSIcon, PostgreSQLIcon, MongoDBIcon, MySQlIcon } from "../data/Icons";

const Skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: <JavaScriptIcon />,
  },
  {
    id: 2,
    name: "Redux",
    icon: <ReduxIcon />,
  },
  {
    id:3, 
    name: "NextJS",
    icon: <NextJSIcon />,
  },
  {
    id:4,
    name: "React",
    icon: <ReactIcon />,
  },
  {
    id:5, 
    name: "TypeScript",
    icon: <TypeScriptIcon />,
  },
  {
    id:6, 
    name: "Python",
    icon: <PythonIcon />,
  },
  {
    id:7, 
    name: "NodeJS",
    icon: <NodeJSIcon />,
  },
  {
    id: 8,
    name: "PostgreSQL",
    icon: <PostgreSQLIcon />,
  },
  // {
  //   id: 9,
  //   name: "MongoDB",
  //   icon: <MongoDBIcon />,
  // },
  {
    id: 10, 
    name: "MySQL",
    icon: <MySQlIcon />,
  },
  // {
  //   id: 11,
  //   name: "TailwindCSS",
  //   icon: <TailwindIcon />,
  // },
  {
    id: 10, 
    name: "MySQL",
    icon: <AWSIcon />,
  },

];

const Skills2 = () => {
  return (
    <div className="md:px-20 px-5 py-10 md:my-10 text-[#CAC8C5]">
      <div className="md:text-4xl text-2xl font-inika mb-10">My Skills</div>
      <div className="grid grid-cols-10 gap-5">
        {Skills.map((skill) => (
          <div key={skill.id} className="flex gap-2 items-center bg-slate-500 cursor-pointer p-1 rounded-md">
            {skill.icon}
            <div className="md:text-base text-sm ">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills2;
