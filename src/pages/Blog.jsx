import React from "react";
import { FaCalendarAlt, FaPenNib, FaUser } from "react-icons/fa";
import SectionContainer from "../Utils/SectionContainer";

const blogs = [
  {
    title: "Getting Started with React",
    date: "June 10, 2025",
    author: "Sauda Tus Sahadia",
    excerpt:
      "Learn the basics of React including components, hooks, and how to get your first app running smoothly...",
    image: "https://i.ibb.co/JjG1gwM9/20250628-1721-image.png",
  },
  {
    title: "Understanding JavaScript Closures",
    date: "May 28, 2025",
    author: "Sauda Tus Sahadia",
    excerpt:
      "Closures are powerful features in JavaScript. In this post, we break down what they are and how they work...",
    image: "https://i.ibb.co/rh6xw4R/20250628-1724-image.png",
  },
  {
    title: "Tips to Build a Standout Portfolio Website",
    date: "April 14, 2025",
    author: "Sauda Tus Sahadia",
    excerpt:
      "Want to impress clients or recruiters? Here are 7 essential tips to craft a stunning, effective portfolio...",
    image: "https://i.ibb.co/Q73XgFLv/20250628-1725-image.png",
  },
];

const Blog = () => {
  return (
    <SectionContainer className="bg-[#212428]">
      <section
        id="blog"
        className="bg-[#212428] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-pink-600 mb-12 text-center flex items-center justify-start gap-3">
            <FaPenNib className="text-pink-600" />
            Blogs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-[#212428] rounded-xl boxGrad overflow-hidden flex flex-col"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="flex flex-col justify-between p-5 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {blog.title}
                    </h3>
                    <div className="text-sm text-gray-400 flex items-center gap-4 mb-2">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-pink-500" /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser className="text-pink-500" /> {blog.author}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{blog.excerpt}</p>
                  </div>
                  <button className="mt-auto px-4 py-2 border border-pink-600 hover:bg-pink-700 text-white rounded transition-all text-sm">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default Blog;
