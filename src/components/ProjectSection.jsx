import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <section id="projects" className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mb-12 text-center border-b-2 inline-block pb-2">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              project={project}
              className="bg-[#262626] rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <Link to={`/projectCard/${project.id}`}
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
