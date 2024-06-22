import React from "react";
import Button from './Button'
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { arrow } from "../assets";

const UseCases = () => {
  const { register } = useKindeAuth();

  return (
    <section className="bg-blue-50 px-4 sm:px-6 lg:px-8 mx-auto  flex flex-col justify-center items-center py-12 sm:py-12 lg:py-12 xl:py-32">
      <div
        className="flex w-full justify-center px-5 py-7 tablet:px-7 sm:py-9"
        id="use-cases"
      >
        <div className="flex w-full max-w-[1000px] flex-col">
          <div className="flex flex-col items-center text-center mb-7  ">
            <h2 className="text-base font-normal text-gray-700 mt-5   sm:text-lg lg:text-xl">
              Use Cases
            </h2>
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mt-5">
              Here is how QuizBuddy can help you
            </h2>
          </div>
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-3 mt-10">

            {/* The first use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4  text-black font-bold flex gap-2 items-center">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6h18v2H3zM3 12h18v2H3zM3 18h18v2H3z"></path>
                </svg>
                Effortless Quiz Creation
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                Transform your study materials into quizzes with a click! Save
                time and focus on what matters: learning.
              </p>
            </div>

            {/* The second use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4 text-black font-bold flex gap-2 items-center">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4a4 4 0 11-4 4 4 4 0 014-4m0-2a6 6 0 106 6 6 6 0 00-6-6zm0 14a8 8 0 018 8H4a8 8 0 018-8zm0 10h10v2H2v-2h10z"></path>
                </svg>
                Enhanced Engagement
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                Make learning fun and interactive. Create quizzes that keep
                students engaged and motivated.
              </p>
            </div>

            {/* The third use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4  text-black font-bold flex gap-2 items-center">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 1H7a2 2 0 00-2 2v18a1 1 0 001 1h14a1 1 0 001-1V3a2 2 0 00-2-2zM9 3h10v8H9zm0 10h10v6H9zm-2 6V5H5v14z"></path>
                </svg>
                Streamlined Test Preparation
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                No more endless reading! Generate quizzes from your notes and
                textbooks to prepare efficiently for exams.
              </p>
            </div>

            {/* The fourth use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4  text-black font-bold flex gap-2 items-center">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3v16h4v2H2V1h20v2h-4v2H3zm9 4h8v1h-8zm0 3h8v1h-8zm0 3h8v1h-8zm0 3h8v1h-8zm-2 2H6v-1h4zm0-3H6v-1h4zm0-3H6v-1h4zm0-3H6v-1h4zm0-3H6V7h4z"></path>
                </svg>
                Boost Your Online Courses
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                Enhance your e-learning platforms with interactive quizzes. Keep
                learners on track and measure their progress.
              </p>
            </div>

            {/* The fifth use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4 font-bold text-black flex gap-2 items-center">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 14H4a2 2 0 00-2 2v4a1 1 0 001 1h18a1 1 0 001-1v-4a2 2 0 00-2-2zm-2-9.5a2.5 2.5 0 10-5 0v9.5h5V4.5zm-7 0a2.5 2.5 0 10-5 0v9.5h5V4.5z"></path>
                </svg>
                Corporate Training Simplified
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                Turn training manuals into quizzes effortlessly. Keep your
                employees’ skills sharp and up-to-date.
              </p>
            </div>

            {/* The sixth use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4 font-bold text-black flex gap-2 items-center">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v2H3v1h18V5h-9V3h-1zm-2 5v13h1v1h-1v1h-1v-1H5V8h5zm6 0h1v12h-1V8zm3 0h1v12h-1V8z"></path>
                </svg>
                Tutoring Made Easy
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                Customize quizzes for your students. Provide targeted practice
                and track their improvement over time.
              </p>
            </div>

            {/* The seventh use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4 font-bold text-black flex gap-2 items-center">
                <div>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l-3.293 3.293 1.414 1.414L12 4.828l2.879 2.879 1.414-1.414L12 2zm9 7l-2.828-2.828-1.415 1.415L18.172 8H14v2h4.172l-1.415 1.415L19 12l3-3zM12 13a3 3 0 00-3 3H4a1 1 0 00-1 1v4h10v-4a1 1 0 00-1-1h-5a5 5 0 00-5 5h18v-2h-8a3 3 0 003-3v-2zm0 1v1a2 2 0 11-2-2h1v1h-1v1z"></path>
                  </svg>
                </div>
                Content Enrichment
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                Engage your audience by creating quizzes from your blog posts or
                videos. Make your content more interactive and memorable.
              </p>
            </div>

            {/* The eighth use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4 font-bold text-black flex gap-2 items-center">
                <div>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.7 0 5.6 1.6 3.6 4.4c-2.4 3.3-2.7 7.8-1 11.4l7.4 9.2c.2.2.4.4.6.4.2 0 .4-.2.6-.4l7.4-9.2c1.7-3.6 1.4-8.1-1-11.4C18.4 1.6 15.3 0 12 0zm0 2c2.8 0 5.5 1.3 7.2 3.7 2.2 3.2 2.4 7.1.7 10.3L12 23.6l-7.9-7.6c-1.7-3.2-1.5-7.1.7-10.3C6.5 3.3 9.2 2 12 2z"></path>
                  </svg>
                </div>
                Support Non-Profit Education
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                Create learning materials and assessments for educational
                programs in underserved areas. Empower learners everywhere.
              </p>
            </div>

            {/* The nineth use case card starts here */}
            <div className="rounded-lg bg-white p-3">
              <h3 className="mb-1 text-4 font-bold text-black flex gap-2 items-center">
                <div>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1c1.104 0 2 .896 2 2v18c0 1.104-.896 2-2 2s-2-.896-2-2V3c0-1.104.896-2 2-2zm0-1C10.346 0 9 1.346 9 3v18c0 1.654 1.346 3 3 3s3-1.346 3-3V3c0-1.654-1.346-3-3-3zm7 6.5C19 7.224 18.776 8 18 8h-3v4h3c.776 0 1-.776 1-1.5S18.776 9 18 9h-2v1h2c.224 0 .5.224.5.5S18.224 11 18 11h-4V7h4zM5 7.5C5 7.224 5.224 7 5.5 7H8V4H5c-.776 0-1 .776-1 1v2.5zm0 1V15h3v2H5v1h4v-1H6v-2h2.5c.776 0 1-.776 1-1.5S9.276 11 8.5 11H5V8.5zm0-1V11h2.5c.224 0 .5.224.5.5S7.724 12 7.5 12H5zm7 2.5V14h-2v2h2v2h-2v2h4v-2h-2v-2h2v-2h-2v-2h-2v-2h-2v4zM5 15h2.5c.224 0 .5-.224.5-.5S7.724 14 7.5 14H5v-2.5zm0 1V12h2.5c.224 0 .5-.224.5-.5S7.724 11 7.5 11H5V8.5zm0 6h2.5c.224 0 .5-.224.5-.5S7.724 15 7.5 15H5zM11 12v6h2v-2h2v-4h-4z"></path>
                  </svg>
                </div>
                Language Learning Advancement
              </h3>
              <p className="text-2 font-[400] text-gray-500">
                Enhance language acquisition with tailored quizzes. Improve
                vocabulary, grammar, and comprehension skills effectively.
              </p>
            </div>
          </div>
        </div>
       
      </div>
      {/* <Button onclick={ register } type="button" className="inline-flex items-center justify-center gap-[0.5em] mt-6 w-full max-w-[30px] self-center text-4 sm:mt-8"/> */}
      <button
          onClick={register}
          type="button"
          className="inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl pl-8 pr-5 py-4 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          href=""
        >
          Get Quizbuddy
          <img src={arrow} alt="arrow-icon" className="mx-[7px]" />
        </button>
     
    </section>
  );
};

export default UseCases;


