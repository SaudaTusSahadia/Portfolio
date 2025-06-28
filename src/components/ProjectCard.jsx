import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectCard = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === id);
        setProject(found);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading project:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-white text-center mt-20">Loading...</div>;
  if (!project) return <div className="text-white text-center mt-20">Project not found</div>;

  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-20 min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#262626] border border-pink-600 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left: Project Image */}
        <div className="w-full md:w-1/2">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-lg border shadow-md"
          />
        </div>

        {/* Right: Project Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">{project.name}</h2>

          <p>
            <span className="text-pink-500 font-semibold">📄 Description:</span>{' '}
            {project.description}
          </p>

          <p>
            <span className="text-pink-500 font-semibold">🧰 Tech Stack:</span>{' '}
            {project.stack.join(', ')}
          </p>

          <p>
            <span className="text-pink-500 font-semibold">🚧 Challenges:</span>{' '}
            {project.challenges}
          </p>

          <p>
            <span className="text-pink-500 font-semibold">🔮 Future Plans:</span>{' '}
            {project.future}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded transition"
            >
              🔗 Live Site
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-pink-600 text-pink-600 hover:bg-pink-700 hover:text-white font-semibold px-6 py-2 rounded transition"
            >
              🛠 GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
