import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-12 sm:py-16 lg:pt-20 xl:pt-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-3 gap-y-12 md:grid-cols-7">
          <div className="col-span-2 shrink-0 md:col-span-3">
            <a>
              <img className="h-8 w-auto" src={""} alt="quizbuddy_logo" />
            </a>
            <p className="text-base font-normal text-gray-900 mt-6 max-w-[310px]">
              Make studying lengthy documents an easier and more engaging
              learning experience
            </p>
            <div>
              <div className="inline-flex items-center gap-2 text-base font-medium text-blue-600 mt-6 hover:underline">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                </svg>
                Oamenemmy@quizbuddy.ai
              </div>
            </div>
          </div>
          <div className="md:col span-2">
            <p className="text-sm font-semibold text-blue-600">Links</p>
            <ul className="mt-6 space-y-4">
              <li>support</li>
              <li>Pricing</li>
              <li>Affiliates</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="md:col span-2">
            <p className="text-sm font-semibold text-blue-600">Learn</p>
            <ul className="mt-6 space-y-4">
              <li>How to convert any webiste to PDF</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-semiold text-blue-600">Legal</p>
            <ul className="mt-6 space-y-4">
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-12 sm:mt-16 md:flex-row md:justify-between  pt-6 border-t-[1px] border-t-gray-300">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray-600">
            © Quizbuddy 2024 . All rights reserved
          </p>
          <ul className="flex items-center justify-center gap-8 md:justify-end">
            <li>
              <a>
                <span className="sr-only">Twitter</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a>
                <span className="sr-only">Youtube</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a>
                <span className="sr-only">Facebook</span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5001 0C4.7011 0 0 4.72075 0 10.544C0 15.7667 3.78548 20.092 8.74886 20.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886 5.10564 10.2817 3.73225 12.5209 3.73225C13.5934 3.73225 14.515 3.8125 14.7826 3.84784V6.48217L13.2295 6.48292C12.012 6.48292 11.7773 7.06377 11.7773 7.91643V9.79645H14.6824L14.3035 12.7422H11.7773V21C16.9724 20.3651 21 15.9296 21 10.5409C21 4.72075 16.2989 0 10.5001 0Z"
                    fill=""
                  />
                </svg>
              </a>
            </li>
            <li>
              <a>
                <span className="sr-only">LinkedIn</span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4855 0H1.51453C0.67804 0 0 0.67804 0 1.51453V19.4855C0 20.322 0.67804 21 1.51453 21H19.4855C20.322 21 21 20.322 21 19.4855V1.51453C21 0.67804 20.322 0 19.4855 0V0ZM7.44882 15.873H4.89159V8.17957H7.44882V15.873ZM6.17029 7.12903H6.15363C5.2955 7.12903 4.74051 6.53831 4.74051 5.80003C4.74051 5.04508 5.31248 4.4707 6.18727 4.4707C7.06206 4.4707 7.60039 5.04508 7.61705 5.80003C7.61705 6.53831 7.06206 7.12903 6.17029 7.12903ZM16.6696 15.873H14.1127V11.7572C14.1127 10.7229 13.7425 10.0174 12.8172 10.0174C12.1108 10.0174 11.6901 10.4933 11.5052 10.9526C11.4376 11.117 11.4211 11.3467 11.4211 11.5767V15.873H8.86402C8.86402 15.873 8.89751 8.90135 8.86402 8.17957H11.4211V9.26889C11.7609 8.74466 12.3689 7.99901 13.7257 7.99901C15.4081 7.99901 16.6696 9.09858 16.6696 11.4616V15.873Z"
                    fill=""
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
