import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaHeart, FaBriefcase, FaUserAstronaut } from 'react-icons/fa';
import { BiUserVoice } from 'react-icons/bi';

const About = () => {
  return (
    <section id="about" className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-pink-600 mb-12 text-center border-b-2 inline-block pb-2">
          About Me
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Box 1: Programming Journey */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300">
            <div className="flex items-start gap-4">
              <FaLaptopCode className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">My Programming Journey</h3>
                <p className="text-gray-300">
                  I began my programming journey during my school days. From building simple pages to dynamic React apps, I’ve grown into a developer who loves turning creative ideas into functional interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2: Type of Work */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300">
            <div className="flex items-start gap-4">
              <FaBriefcase className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">What I Love to Build</h3>
                <p className="text-gray-300">
                  I love creating responsive user interfaces with React, Tailwind, and motion animations. I enjoy the mix of creativity and logic, and I strive to make every project beautiful and intuitive.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3: Hobbies & Interests */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300">
            <div className="flex items-start gap-4">
              <FaPaintBrush className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Hobbies & Interests</h3>
                <p className="text-gray-300">
                  Apart from coding, I enjoy painting, exploring color palettes, and digital art. I also love badminton, music, and discovering new aesthetics for UI inspiration.
                </p>
              </div>
            </div>
          </div>

          {/* Box 4: Personality & Values */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300">
            <div className="flex items-start gap-4">
              <BiUserVoice className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">My Personality</h3>
                <p className="text-gray-300">
                  I’m a curious, friendly, and positive person. I love collaborating, solving real-world problems, and continuously improving. I enjoy bringing good vibes into tech spaces.
                </p>
              </div>
            </div>
          </div>

          {/* Box 5: Passion */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300 md:col-span-2">
            <div className="flex items-start gap-4">
              <FaHeart className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Why I Code</h3>
                <p className="text-gray-300">
                  I code because I love it. Every line, every pixel is an expression of purpose. Whether it's solving a bug or launching a new feature, it’s the joy of creation that drives me.
                </p>
              </div>
            </div>
          </div>

          {/* Optional: Fun Box */}
          <div className="bg-[#262626] p-6 rounded-xl shadow-md border border-pink-600 hover:shadow-pink-600 transition-all duration-300 md:col-span-2">
            <div className="flex items-start gap-4">
              <FaUserAstronaut className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Fun Fact</h3>
                <p className="text-gray-300">
                  If I weren’t a developer, I’d probably be designing fantasy game worlds or animating space-themed art. I love mixing logic with imagination.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
