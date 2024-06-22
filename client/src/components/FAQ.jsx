import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <section
    className="bg-white flex justify-center pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 py-12 sm:py-16 lg:py-20 xl:py-32"
    >
      <div className="flex w-full max-w-[1000px] flex-col">
        <div className="mx-auto flex flex-col mt-0">
          <div className="max-w-screen-xl mx-auto text-center lg:max-w-3xl mb-[70px]">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              F.A.Q
            </h2>
          </div>
          <div className="flex max-w-[650px] flex-col gap-6">
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
