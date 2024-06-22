import { useState } from "react";
import React from "react";

const Accordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-5 bg-blue-50 rounded-lg shadow-lg px-5  w-full">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full gap-2 items-center py-5  "
      >
        <span>This is the title</span>
        { accordionOpen ? <span>-</span>: <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
           
        }`}
      >
        <div className="overflow-hidden ">This is the answer</div>
      </div>
    </div>
   );
};

export default Accordion;
