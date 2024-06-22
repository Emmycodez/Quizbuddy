import React from "react";
import { arrow, pricingchecks } from "../assets";

const Pricing = () => {
  return (
    <section className="flex bg-white w-full justify-center px-5 py-7 sm:px-7 md:px-9" id="pricing">
      <div className="flex w-full max-w-[1000px] flex-col">
        
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-1 px-4">
          <h2 className="text-base font-normal text-gray-700 mt-5 sm:text-lg lg:text-xl">Pricing</h2>
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mt-5">
            Transform your documents into {""}
            <br className="hidden sm:block"/>
            <span className="text-blue-600">engaging quizzes</span> effortlessly
          </h2>
        </div>
        
        {/* Launch offer banner */}
        <div className="flex flex-col items-center w-full mt-7 px-4">
          <div className="mb-7 text-center font-semibold whitespace-normal break-words py-2 px-4 rounded-xl text-black text-xl">
            Launch Offer:
            <span className="animate-bounce text-black"> 65% OFF the next 50 orders</span>
          </div>
        </div>
        
        {/* Pricing cards container */}
        <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row px-4">
          <div className="flex flex-col w-full sm:flex-row gap-6 justify-center items-center">
            
            {/* The first pricing card */}
            <div className="relative mb-4 flex max-w-[400px] flex-col rounded-xl border-2 bg-white px-[30px] py-10 shadow-lg w-full sm:max-w-[48%]">
              <div>
                <div className="mb-2 text-2xl font-bold">Monthly</div>
              </div>
              <div className="mt-[28px]">
                <div className="flex items-baseline">
                  <span className="mr-2 text-xl text-gray-400 line-through">$197</span>
                  <span className="text-5xl font-bold">$12</span>
                  <span className="self-end font-semibold text-gray-400">/month</span>
                </div>
                <div className="mt-[28px] flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Convert up to 10 documents/month</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Support for PDF and Word formats</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Basic quiz customization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>AI-generated questions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Email support</span>
                  </div>
                </div>
                <div className="mt-[28px] flex flex-col items-center">
                  <a
                    className="inline-flex items-center justify-center gap-[0.5em] w-full bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-4 py-2 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href=""
                  >
                    Get Monthly
                    <img src={arrow} alt="arrow-icon" className="mx-[7px]" />
                  </a>
                  <p className="m-auto mt-2 inline-flex items-center text-center text-xs text-gray-500">
                    one-time payment, then it's yours forever
                  </p>
                </div>
              </div>
            </div>

            {/* The second pricing card */}
            <div className="w-full max-w-[400px] sm:max-w-[48%]">
              <div className="border-indigo-600 relative mb-4 flex max-w-full flex-col rounded-xl border-2 bg-white px-[30px] py-6 shadow-lg">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-indigo-600 px-5 text-sm font-bold text-white">
                  Best Deal: 65% off
                </div>
                <div>
                  <div className="mb-2 text-2xl font-bold">Yearly</div>
                  <div className="text-sm text-gray-400">$5.83/month billed annually</div>
                </div>
                <div className="mt-[28px]">
                  <div className="flex items-baseline">
                    <span className="mr-2 text-xl text-gray-400 line-through">$197</span>
                    <span className="text-5xl font-bold">$69</span>
                    <span className="self-end font-semibold text-gray-400">/year</span>
                  </div>
                </div>
                <div className="mt-[28px] flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Convert up to 120 documents/year</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Support for multiple document formats (PDF, Word, PPT, etc.)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Advanced quiz customization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>AI-generated questions with manual editing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Detailed analytics and reports</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Priority email and chat support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={pricingchecks} alt="check-icon" className="mt-1" />
                    <span>Secure cloud storage</span>
                  </div>
                </div>
                <div className="mt-[28px] flex flex-col items-center">
                  <a
                    className="inline-flex items-center justify-center gap-[0.5em] w-full bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-4 py-2 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href=""
                  >
                    Get Yearly
                    <img src={arrow} alt="arrow-icon" className="mx-[7px]" />
                  </a>
                  <p className="m-auto mt-2 inline-flex items-center text-center text-xs text-gray-500">
                    Secure payment with stripe
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;
