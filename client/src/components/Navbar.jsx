import { arrow } from '../assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) => isActive ? "text-[17px] font-semibold leading-5 transition-all duration-150 rounded-lg px-3 py-2 bg-gray-100 text-blue-600 font-poppins" : "text-[17px] font-semibold leading-5 transition-all duration-150 rounded-lg px-3 py-2 text-gray-950 hover:bg-gray-100 hover:text-blue-600 font-poppins"


  return (
    <header className="sticky z-50 bg-white/90 backdrop-blur-lg inset-x-0 top-0 border-b border-gray-100 py-3 px-6">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <NavLink to='/'>
              <h1 className="font-bold text-2xl text-blue-600 font-poppins">QuizBuddy</h1>
              {/* <img src={quizLogo} alt="quiz_buddy_logo" className="w-[500px] h-[100px] cursor-pointer" /> */}
            </NavLink>
          </div>
          <div className="hidden items-center justify-center gap-4 lg:flex">
            <NavLink to="./useCases" className={linkClass}>
              Use Cases
            </NavLink>
            <NavLink to="/integrations" className={linkClass}>
              Integrations
            </NavLink>
            <NavLink to="/Pricing" className={linkClass}>
              Pricing
            </NavLink>
            <NavLink to='/LiveDemo' className={linkClass}>
              Try It
            </NavLink>
            <NavLink to='/Dashboard' className={linkClass}>
              Dashboard
            </NavLink>
          </div>
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center bg-white text-md font-semibold leading-5 text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 transition-all duration-150 rounded-lg px-3 py-2.5 hover:bg-blue-50"
            >
              Sign In
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-blue-600 text-md font-semibold leading-5 text-white shadow-sm transition-all duration-150 rounded-lg px-3 py-2.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 gap-[0.2em]"
            >
              Get QuizBuddy
              <img src={arrow} alt="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
