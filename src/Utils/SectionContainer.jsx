import React from "react";

const SectionContainer = ({ children, className = "" }) => {
  return (
    <div className={` py-10 ${className}`}>
      <div className="w-full max-w-7xl mx-auto p-5 md:p-0 ">{children}</div>
    </div>
  );
};

export default SectionContainer;
