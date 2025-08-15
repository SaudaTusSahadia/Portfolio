import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";
import bannerImage from "../assets/SaudasProfilePhoto-1.png";
import SocialLinks from "./SocialLinks";
import Typewriter from "typewriter-effect";
import SectionContainer from "../Utils/SectionContainer";
// boxGrad
const Banner = () => {
  return (
<SectionContainer className="bg-[#212428] text-white">
  <div>
    <div className="max-w-7xl mx-auto  grid md:grid-cols-5 gap-5 items-stretch">
      {/* Left Text Content */}
      <div className="flex flex-col justify-between col-span-5 md:col-span-3">
        <div className="boxGrad mb-8 p-5 rounded-xl ">
          <div className="flex items-center gap-3 mb-4 text-pink-600"></div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-pink-600">Sauda Tus Sahadia</span>
          </h1>

          {/* ✅ Typewriter Effect Here */}
          <div className="text-gray-300 text-lg mb-2 h-[40px]">
            <Typewriter
              options={{
                strings: [
                  "Web Designer and Developer",
                  "CSE Student at University of Barishal",
                  "Passionate about UI/UX & React",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <FaBriefcase className="text-pink-600" />
              Web Designer & Developer
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-pink-600" />
              sauda.cse8.bu@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-600" />
              Barishal, Sagordi 23
            </li>
          </ul>
        </div>

        <div className="bg-[#262626] p-6 rounded-xl boxGrad">
          <SocialLinks />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center  h-full   col-span-5 md:col-span-2 items-center rounded-xl boxGrad bg-[#262626] ">
        <img
          src={bannerImage}
          alt="profile"
          className=" w-[300px] md:w-[400px] h-full object-cover "
        />
      </div>
    </div>
  </div>
</SectionContainer>

  );
};

export default Banner;
