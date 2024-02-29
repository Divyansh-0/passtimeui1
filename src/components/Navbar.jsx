import { useState } from "react";

import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="  md:px-14 p-4 max-w-screen-2xl text-primary mx-auto items-center fixed  sticky top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center space-x-12">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-2 text-primary"
            >
              {" "}
              <span>Dev</span> Corp
            </a>
          </div>
          <div>
            <ul className="hidden md:flex space-x-[20px]">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block
              hover:text-gray-300 
              "
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span>Language</span>
            </a>
            <button className="bg-gray-300 px-2 py-2 rounded transition-all duration-300 hover:text-gray-200 hover:bg-primary">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 pt-4 pb-4 bg-secondary ${
          isMenuOpen ? "block fixed top-20 right-0 left-0" : "hidden "
        } `}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="block
              hover:text-gray-300 
              "
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
