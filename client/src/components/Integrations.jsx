import React from "react";
import { integrationsImg } from '../assets'

const Integrations = () => {
  return (
    <section className="bg-white pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22flex flex-col items-center text-center mb-6">
      <h2 className="text-base font-normal text-gray-700 mt-5   sm:text-lg lg:text-xl">
        Supports All kinds of documents
      </h2>
      <div className="flex flex-col items-center text-center mb-7  ">
        <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mt-5 text-center">
          Convert <span className="text-blue-600">Any Kind</span> of document{" "}
          <br className="hidden sm:block" /> into a quiz
        </h2>
      </div>
      <div className="max-w-4xl mx-auto text-center lg:max-w-3l">
        <img className="w-full object-cover" src={integrationsImg} alt="" />
      </div>
    </section>
  );
};

export default Integrations;
