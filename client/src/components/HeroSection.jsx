import { arrow } from "../assets";
import Companies from "../components/Companies";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const HeroSection = () => {
  const { login, register } = useKindeAuth();

  return (
    <section className="text-center flex flex-col font-poppins py-[50px] px-[60px] sm:pb-16 lg:pb-20 items-center bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl text-center font-bold tracking-tight text-gray-900 mt-8 sm:text-5xl lg:text-6xl">
          Turn Your <span className="text-blue-600">Documents </span>
          <br className="sm:block hidden" /> to Quizzes
          <span className="text-blue-600"> Using AI</span>
        </h1>
        <p className="text-base font-normal text-gray-700 mt-5 sm:text-lg lg:text-xl">
          Breakdown each chapter of your course materials into engaging quizzes
          <br className="xs:block hidden" />
          using AI and understand your courses 20x faster.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:mt-8 lg:justify-start">
        <button
          onClick={register}
          type="button"
          className="inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl pl-8 pr-5 py-4 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          href=""
        >
          Get Quizbuddy
          <img src={arrow} alt="arrow-icon" className="mx-[7px]" />
        </button>
        <button
          onClick={login}
          type="button"
          className="inline-flex items-center justify-center bg-white text-lg font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 transition-all duration-150 rounded-xl px-16 py-4 hover:bg-blue-50"
          href=""
        >
          Sign In
        </button>
      </div>
      {/* <Companies/> */}
    </section>
  );
};

export default HeroSection;
