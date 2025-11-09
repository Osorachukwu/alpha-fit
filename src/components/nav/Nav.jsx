import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-main.png";

import DesktopNav from "./DesktopNav";

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [chevToggle, setChevToggle] = useState(false);
  const handleBlurClick = () => {
    document.activeElement?.blur();
  };
  return (
    <header className="z-50">
      <div
        className={`bg-${isOpen ? "gray-200" : "[#fdf6ee]"
          } text-black relative`}
      >
        {/* 💥💥💥💥💥💥 */}
        <div className="flex justify-between items-center px-2 md:hidden py-3 shadow-sm absolute w-full">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center px-3 py-1"
          >
              <img src={logo} alt="Logo" width={50} />
            {/* <span className="text-color-primary ml-2 font-bold tracking-wide uppercase">
              Tech Region Africa
            </span> */}
          </Link>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className={`group z-50`}>
              <div
                className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              />
              <div
                className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
              />
            </button>
          </div>
        </div>
        {/* 💥💥💥💥💥💥 */}

        {/* {isOpen && ( */}
        <nav
          className={`${isOpen ? "translate-x-0" : "-translate-x-full"
            } absolute backdrop-blur-md bg-white/10 py-1 z-40 top-0 h-screen w-screen transform -translate-x-full transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="flex justify-between items-center p-4">
            <Link
              to="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* <div className="primary-color py-2 px-1">
                <img src={logo} alt="" width="80" />
              </div> */}logo
              {/* <span className="text-color-primary ml-2 font-bold tracking-wide uppercase">
                Tech Region Africa
              </span> */}
            </Link>
            <X size={28} onClick={toggleMenu} />
          </div>
          <ul className="ml-8 space-y-2 text-lg">
            <li onClick={toggleMenu}>
              <Link to="/" className="btnNav">
                Home
              </Link>
            </li>
            {/* <li>
              <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btnNav">
                  Click <ChevronDown size={16} />
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu z-10 w-52 rounded-box bg-base-100 p-2 shadow-sm bg-gray-50 font-semibold"
                >
                  <li onClick={toggleMenu}>
                    <Link
                      to="/frontend-web-dev"
                      onClick={handleBlurClick}
                      className="hover:bg-[#07D5DF]"
                    >
                      Software
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link
                      to=""
                      onClick={handleBlurClick}
                      className="hover:bg-[#07D5DF]"
                    >
                      Cyber security
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link
                      to=""
                      onClick={handleBlurClick}
                      className="hover:bg-[#07D5DF]"
                    >
                      Data Aylitics
                    </Link>
                  </li>
                  <li onClick={toggleMenu}>
                    <Link
                      to=""
                      onClick={handleBlurClick}
                      className="hover:bg-[#07D5DF]"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      onClick={handleBlurClick}
                      className="hover:bg-[#07D5DF]"
                    >
                      Management
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}

            <li onClick={toggleMenu}>
              <Link to="/transformations" className="btnNav">
                Transformations
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/vip-coaching" className="btnNav">
                1-1 VIP Coaching
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/faq" className="btnNav">
                FAQ's
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/contact" className="btnNav">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* )} */}
        {/* #02172A #07D5DF */}

        <DesktopNav />
      </div>
    </header>
  );
}
// There is a change here oooo