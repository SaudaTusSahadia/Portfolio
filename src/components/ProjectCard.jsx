import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  FaTools,
  FaRocket,
  FaBookOpen,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const techIconMap = {
  React: <SiReact className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-blue-400" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Express: <SiExpress className="text-gray-300" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
};

const ProjectCard = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setProject(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading project:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="text-white text-center mt-20">Loading...</div>;
  if (!project)
    return (
      <div className="text-white text-center mt-20">Project not found</div>
    );

  return (
    <section className="bg-[#212428] text-white py-16 px-4 md:px-8 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto bg-[#1f1f1f] boxGrad rounded-2xl shadow-xl overflow-hidden p-6 md:p-10 flex flex-col md:flex-row gap-10 items-start transition-all duration-300">
        {/* Project Image */}
        <div className="w-full md:w-1/2 space-y-6">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover rounded-xl shadow-md "
          />
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
            {project.name}
          </h2>

          <div>
            <h4 className="text-pink-400 font-semibold mb-2 flex items-center gap-2">
              🧰 Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1 rounded-full border border-pink-600 text-sm"
                >
                  {techIconMap[tech] || null} {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h4 className="text-pink-400 font-semibold flex items-center gap-2">
              <FaBookOpen className="text-lg" /> Description:
            </h4>
            <p className="text-gray-300 mt-1">{project.description}</p>
          </div>

          <div>
            <h4 className="text-pink-400 font-semibold flex items-center gap-2 mt-4">
              <FaTools className="text-lg" /> Challenges:
            </h4>
            <p className="text-gray-300 mt-1">{project.challenges}</p>
          </div>

          <div>
            <h4 className="text-pink-400 font-semibold flex items-center gap-2 mt-4">
              <FaRocket className="text-lg" /> Future Plans:
            </h4>
            <p className="text-gray-300 mt-1">{project.future}</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white px-5 py-2 rounded-lg transition"
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
