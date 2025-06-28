import React from 'react';

const skills = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS / Tailwind', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 65 },
    { name: 'MongoDB', level: 60 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Figma', level: 70 },
    { name: 'VS Code', level: 90 },
  ],
};

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-pink-600">{name}</span>
      <span className="text-sm text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className="bg-pink-600 h-3 rounded-full transition-all duration-700"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mb-12 text-center border-b-2 inline-block pb-2">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300">
            <h3 className="text-xl font-semibold text-pink-500 mb-4">Frontend</h3>
            {skills.frontend.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Backend */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300">
            <h3 className="text-xl font-semibold text-pink-500 mb-4">Backend</h3>
            {skills.backend.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Tools */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300">
            <h3 className="text-xl font-semibold text-pink-500 mb-4">Tools</h3>
            {skills.tools.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
