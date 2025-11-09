import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-main.png";

import DesktopNav from "./DesktopNav";
import AltMobNav from "./AltMobNav";

export default function Nav() {
  let currentPath = useLocation()?.pathname || "/";
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
      {/* <AltMobNav /> */}
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
            <button onClick={() => setIsOpen(!isOpen)} className={`group z-50 pr-4`}>
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
          <div className="flex justify-between items-center px-4 py-6">
            <Link
              to="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={logo} alt="Logo" width={50} />
              {/* <span className="text-color-primary ml-2 font-bold tracking-wide uppercase">
                Tech Region Africa
              </span> */}
            </Link>
            <X size={28} onClick={toggleMenu} className="text-white mr-3" />
          </div>
          <ul className="ml-8 space-y-2 text-lg text-white">
            {[
              { title: "Home", path: "/" },
              { title: "Transformations", path: "/transformations" },
              { title: "1-1 Vip coaching", path: "/vip-coaching" },
              { title: "FAQ", path: "/faq" },
              { title: "Contact", path: "/contact" },
            ].map((link, index) => (
              <li key={index} className={`${currentPath === link.path && "text-secondary-accent font-semibold"}`}>
                <Link to={link.path} onClick={toggleMenu} className="btnNav">
                  {link.title}
                </Link>
              </li>
            ))}


            {/* <li onClick={toggleMenu}>
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
            </li> */}
            <li>
              <Link to="" className="btn text-black text-base border-transparent bg-gradient-to-r from-red-600 to-yellow-400">Members area</Link>
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