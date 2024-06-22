import React from "react";
import { arrow }  from "../assets";

const Button = () => {
  return (
    <div>
      <a
        className="inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl pl-8 pr-5 py-4 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        href=""
      >
        Get Quizbuddy
        <img src={arrow} alt="arrow-icon" className="mx-[7px]" />
      </a>
    </div>
  );
};

export default Button;
