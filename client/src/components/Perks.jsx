import React from "react";
import { goodMark, badMark } from "../assets";

const Perks = () => {
  return (
    <section className="bg-blue-50 pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 py-12 sm:py-16 lg:py-20 xl:py-32">
      {/* The heading starts here */}
      <div className="max-w-screen-xl mx-auto text-center lg:max-w-3xl mb-[70px]">
        <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Tired of reading 1000's of pages
          <br className="hidden sm:block" /> of course materials?
        </h2>
      </div>
      {/* The heading ends here */}

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
        {/* The problems card starts here */}
        <div className="bg-white text-gray-900 shadow-lg p-8 md:p-12 rounded-lg w-full max-w-md">
          <h3 className="font-bold text-lg mb-4">
            Studying PDFs Without QuizBuddy
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img
                  src={badMark}
                  alt="Negative mark icon"
                  className="w-[15px]"
                />
              </div>
              Boring and tiring
            </li>
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img
                  src={badMark}
                  alt="Negative mark icon"
                  className="w-[15px]"
                />
              </div>
              Manually create quizzes
            </li>
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img
                  src={badMark}
                  alt="Negative mark icon"
                  className="w-[15px]"
                />
              </div>
              Difficult to prepare for tests
            </li>
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img
                  src={badMark}
                  alt="Negative mark icon"
                  className="w-[15px]"
                />
              </div>
              Waste time googling answers
            </li>
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img
                  src={badMark}
                  alt="Negative mark icon"
                  className="w-[15px]"
                />
              </div>
              Overwhelmed with so many chapters to read
            </li>
          </ul>
        </div>

        {/* The benefits card starts here */}

        <div className="bg-blue-600 shadow-lg rounded-lg w-full max-w-md text-white p-8 md:p-12">
          <h3 className="font-bold text-lg mb-4">Studying PDFS with QuizBuddy</h3>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li className="flex gap-2 items-center ">
              <div className="shrink-0 py-1.5">
                <img src={goodMark} alt="" className="w-[15px]" />
              </div>
              Learning is more Engaging
            </li>
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img src={goodMark} alt="" className="w-[15px]" />
              </div>
              Create quizzes in seconds
            </li>
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img src={goodMark} alt="" className="w-[15px]" />
              </div>
              Easily prepare for tests and Exams
            </li>
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img src={goodMark} alt="" className="w-[15px]" />
              </div>
              Have AI generate correct answers
            </li>
            <li className="flex gap-2 items-center">
              <div className="shrink-0 py-1.5">
                <img src={goodMark} alt="" className="w-[15px]" />
              </div>
              Breakdown each chapter into quiz modules
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Perks;
