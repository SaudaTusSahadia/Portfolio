import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import SectionContainer from "../Utils/SectionContainer";

const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Express: <SiExpress className="text-gray-300" />,
};

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
    // .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
<SectionContainer  className="bg-[#212428] text-white">
      <section
      id="projects"

    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mb-12 text-center  pb-5 flex items-center justify-start gap-3">
          <FaProjectDiagram className="text-pink-600" />
          My Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#262626] rounded-xl boxGrad overflow-hidden flex flex-col md:flex-row p-5 gap-5"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full md:w-1/3 h-64 object-cover"
              />

              <div className=" flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-pink-400">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description.slice(0, 120)}...
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-[#1f1f1f] text-white text-xs font-medium px-3 py-1 rounded-full border border-pink-700"
                      >
                        {techIcons[tech] || null}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-all text-sm"
                  >
                    <FaExternalLinkAlt /> Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded transition-all text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <Link
                    to={`/projectCard/${project.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition-all text-sm"
                  >
                    <FaArrowRight /> View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</SectionContainer>
  );
};

export default ProjectSection;
