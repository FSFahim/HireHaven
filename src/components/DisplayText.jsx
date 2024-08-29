import React from "react";
import logo from "../../public/logo.png";

const DisplayText = () => {
  return (
    <>
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-bold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            on
            <img src={logo} className="h-14 sm:h-24 lg:h-32" alt="Hirrd Logo" />
          </span>
          <span>and Get Hired</span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
    </>
  );
};

export default DisplayText;
