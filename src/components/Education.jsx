import React from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const semesters = [
  { title: '1st Semester', gpa: '3.59' },
  { title: '2nd Semester', gpa: '3.58' },
  { title: '3rd Semester', gpa: '3.75' },
  { title: '4th Semester', gpa: '3.61' },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mb-12 text-center border-b-2 inline-block pb-2">
          Educational Qualification
        </h2>

        {/* University Card */}
        <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300 mb-10">
          <div className="flex items-start gap-4">
            <FaUniversity className="text-3xl text-pink-600 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">
                B.Sc. in Computer Science & Engineering
              </h3>
              <p className="text-gray-300">University of Barishal</p>
              <p className="text-gray-400 text-sm mt-1">Currently in 5th Semester</p>
            </div>
          </div>
        </div>

        {/* CGPA by Semester */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {semesters.map((sem, index) => (
            <div
              key={index}
              className="bg-[#262626] p-4 rounded-xl border border-pink-600 text-center shadow hover:shadow-pink-600 transition-all duration-300"
            >
              <FaGraduationCap className="text-3xl text-pink-500 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-pink-400 mb-1">{sem.title}</h4>
              <p className="text-gray-300">GPA: <span className="font-semibold">{sem.gpa}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
