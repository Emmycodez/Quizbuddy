import React from "react";
import { blueArrow } from "../assets";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const CTA = () => {
  const { login, register } = useKindeAuth();

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-600 rounded-3xl p-8 text-center  md:px-24 md:py-20 lg:px-28">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text=5xl lg:text-6xl">
            Turn those Lengthy Documents into Quizzes
          </h2>
          <p className="max-w-lg text-base text-blue-100 mx-auto mt-4 sm:text-lg">
            Make learning easier and interesting again for yourself using
            QuizBuddy. Learn faster and better using AI in an exciting new way.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
          <button
            onClick={register}
            className="inline-flex items-center justify-center bg-white text-lg font-semibold text-blue-600 shadow-sm transition-all duration-150 rounded-xl pl-8 pr-5 py-4 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href=""
          >
            Get Quizbuddy Now!
            <img src={blueArrow} alt="arrow-icon" className="mx-[7px]" />
          </button>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8">
          <li className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            Personalized learning experience
          </li>
          <li className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            AI generated quizzes
          </li>
          <li className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            24/7 customer support
          </li>
          <li className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            95+ languages supported
          </li>
          <li className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            Cancel anytime
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CTA;
