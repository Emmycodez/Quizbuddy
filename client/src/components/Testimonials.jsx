import React from "react";

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="bg-blue-50 px-4 sm:px-6 lg:px-8 mx-auto  flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 xl:py-24 "
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
          <p className="font-semibold mt-5  sm:text-lg lg:text-xl text-blue-600">
            Customer testimonials
          </p>
          <h2 className="font-display text-3-xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">
            Don't just take our word for it
          </h2>
        </div>
        <div className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-12 mx-auto mt-12 text-center sm:mt-16 sm:text-left lg:max-w-none lg:grid-cols-2 lg:mx-0 px-18 sm:px-20 lg:px-24 xl:px-34">
          {/* First testimonial starts here */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <img
              className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"
              src={""}
            />
            <div>
              <blockquote>
                <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">
                  Quizbuddy appears to be the first really production ready
                  support solution that actually helps in my education, i am
                  amazed about how this software works
                </p>
              </blockquote>
              <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">
                Nathan Z. Jatau{" "}
              </p>
              <p className="text-sm font-normal text-gray-700 mt-0.5">
                 Software Engineer at NPDC
              </p>
            </div>
          </div>

          {/* Second testimonial starts here */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <img
              className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"
              src={""}
            />
            <div>
              <blockquote>
                <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">
                  With my big nose i can't concentrate for long but this tool has helped me gamify my learning experience.
                </p>
              </blockquote>
              <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">
                Kinsey Maduabuchi{" "}
              </p>
              <p className="text-sm font-normal text-gray-700 mt-0.5">
                Cyber Security Officer
              </p>
            </div>
          </div>

          {/* Third testimonial starts here */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <img
              className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"
              src={""}
            />
            <div>
              <blockquote>
                <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">
                 Even with my deficiency from drinking lots of garri, Quizbuddy has made learning more engaging for me. Can't believe i actually lived without it.
                </p>
              </blockquote>
              <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">
                Mark Osabomeh{" "}
              </p>
              <p className="text-sm font-normal text-gray-700 mt-0.5">
                Cyber-specialist at Garri Depot
              </p>
            </div>
          </div>

          {/* Fourth testimonial starts here */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <img
              className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"
              src={""}
            />
            <div>
              <blockquote>
                <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">
                 Creating content for my tiktok takes up my time, but with QuizBuddy i can easily convert 1000's of pages into Quizzes that teach me faster
                </p>
              </blockquote>
              <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">
                Morankinyo Samuel{" "}
              </p>
              <p className="text-sm font-normal text-gray-700 mt-0.5">
                Tiktoker and Content Creator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
