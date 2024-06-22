import React from "react";

const Steps = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 xl:py-32 px-18 sm:px-20 lg:px-24 xl:px-34">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl text-center">
            You're <span className="text-blue-600">three easy steps</span> away from turning your documents into quizzes
          </h2>
        </div>
        <div className="flex max-w-sm flex-col md:flex-row justify-center items-center mx-auto mt-12 text-center sm:mt-16 lg:max-w-none lg:text-left  md:items-start gap-8 md:gap-12 py">

          {/* The first steps card starts here */}
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center bg-blue-600 text-xl font-bold text-white shadow-lg rounded-lg">1</div>
            <h3 className="text-xl font-bold text-gray-900 mt-4 sm:text-2xl lg:mt-6">Upload your document</h3>
            <p className="text-sm font-normal text-gray-700 mt-2 sm:text-base sm:mt-3">
              Easily upload documents on your phone to QuizBuddy in seconds. PDF's, DOC's e.t.c
            </p>
          </div>

          {/* The second steps card starts here */}
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center bg-blue-600 text-xl font-bold text-white shadow-lg rounded-lg">2</div>
            <h3 className="text-xl font-bold text-gray-900 mt-4 sm:text-2xl lg:mt-6">QuizBuddy generates quizzes</h3>
            <p className="text-sm font-normal text-gray-700 mt-2 sm:text-base sm:mt-3">
              QuizBuddy does it's magic and breaks each chapter of your document into quizzes
            </p>
          </div>

          {/* The third steps card starts here */}
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center bg-blue-600 text-xl font-bold text-white shadow-lg rounded-lg">3</div>
            <h3 className="text-xl font-bold text-gray-900 mt-4 sm:text-2xl lg:mt-6">You answer your Quiz</h3>
            <p className="text-sm font-normal text-gray-700 mt-2 sm:text-base sm:mt-3">
              Answer your quizzes and get correct answers on questions you get wrong through AI.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Steps;
