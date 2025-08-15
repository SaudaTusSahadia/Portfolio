import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaHeart,
  FaBriefcase,
  FaUserAstronaut,
  FaUser,
} from "react-icons/fa";
import { BiUserVoice } from "react-icons/bi";
import SectionContainer from "../Utils/SectionContainer";

const About = () => {
  return (
    <SectionContainer className="bg-[#212428] text-white">
      <div className="">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-pink-600 mb-12 text-center   pb-5 flex items-center justify-start gap-3">
          <FaUser className="text-pink-600" />
          About Me
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Box 1: Programming Journey */}
          <div className="bg-[#262626] p-6 rounded-xl boxGrad">
            <div className="flex items-start gap-4">
              <FaLaptopCode className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  My Programming Journey
                </h3>
                <p className="text-gray-300">
                  I began my programming journey during my school days. From
                  building simple pages to dynamic React apps, I’ve grown into a
                  developer who loves turning creative ideas into functional
                  interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2: Type of Work */}
          <div className="bg-[#262626] p-6 rounded-xl boxGrad">
            <div className="flex items-start gap-4">
              <FaBriefcase className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What I Love to Build
                </h3>
                <p className="text-gray-300">
                  I love creating responsive user interfaces with React,
                  Tailwind, and motion animations. I enjoy the mix of creativity
                  and logic, and I strive to make every project beautiful and
                  intuitive.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3: Hobbies & Interests */}
          <div className="bg-[#262626] p-6 rounded-xl boxGrad">
            <div className="flex items-start gap-4">
              <FaPaintBrush className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Hobbies & Interests
                </h3>
                <p className="text-gray-300">
                  Apart from coding, I enjoy painting, exploring color palettes,
                  and digital art. I also love badminton, music, and discovering
                  new aesthetics for UI inspiration.
                </p>
              </div>
            </div>
          </div>

          {/* Box 4: Personality & Values */}
          <div className="bg-[#262626] p-6 rounded-xl boxGrad">
            <div className="flex items-start gap-4">
              <BiUserVoice className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">My Personality</h3>
                <p className="text-gray-300">
                  I’m a curious, friendly, and positive person. I love
                  collaborating, solving real-world problems, and continuously
                  improving. I enjoy bringing good vibes into tech spaces.
                </p>
              </div>
            </div>
          </div>

          {/* Box 5: Passion */}
          <div className="bg-[#262626] p-6 rounded-xl boxGrad md:col-span-2">
            <div className="flex items-start gap-4">
              <FaHeart className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Why I Code</h3>
                <p className="text-gray-300">
                  I code because I love it. Every line, every pixel is an
                  expression of purpose. Whether it's solving a bug or launching
                  a new feature, it’s the joy of creation that drives me.
                </p>
              </div>
            </div>
          </div>

          {/* Optional: Fun Box */}
          <div className="bg-[#262626] p-6 rounded-xl boxGrad md:col-span-2">
            <div className="flex items-start gap-4">
              <FaUserAstronaut className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Fun Fact</h3>
                <p className="text-gray-300">
                  If I weren’t a developer, I’d probably be designing fantasy
                  game worlds or animating space-themed art. I love mixing logic
                  with imagination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
