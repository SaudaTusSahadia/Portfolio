import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experiences = () => {
  return (
    <section className="bg-[#212428] text-white py-16 px-4 md:px-8 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mb-8 border-b-2 inline-block pb-2">
          My Experience
        </h2>

        <div className="bg-[#262626] border border-pink-600 p-10 rounded-xl shadow-md flex flex-col items-center justify-center gap-4">
          <FaBriefcase className="text-pink-600 text-5xl" />
          <h3 className="text-xl font-semibold">No Professional Experience Yet</h3>
          <p className="text-gray-400 text-sm">
            I’m currently focused on building strong fundamentals through projects and academic work.
            Always open to internship or collaboration opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
