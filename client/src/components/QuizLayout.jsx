import React from "react";
import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";

const QuizLayout = () => {
  return (
      <>
        <div className="text-zinc-500 flex flex-row justify-between items-center py-4 px-6 text-[16px] mb-[20px] ml-[290px] mr-[290px] mt-[40px] w-[872px]"> 
          <Link to="/">
            <GiCancel className="text-zinc-500 h-[30px] w-[50px]" />
          </Link>
          <div className="bg-lightGray rounded-lg block flex-1 text-[16px] h-[15px] tracking-normal"><div>//////////////////////////////////////////////////////////////////////////////////////////////</div></div>
          <div className="ml-[20px] text-center">1/20</div>
        </div>
        <div className=" block text-[16px] my-[295px] mx-[363px] relative w-[727px]">

        </div>

        <h2>
          How do strong acids and weak acids differ in terms of dissociation?
        </h2>
        <ul>
          <li>Modem</li>
          <li>Router</li>
          <li>LAN Cable</li>
          <li>Pen Drive</li>
        </ul>

        <button>Next</button>
       
      </>
   
  );
};

export default QuizLayout;
