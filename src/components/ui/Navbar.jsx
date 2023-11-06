import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Switch, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomMenu from "./CustomMenu";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkTheme((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="flex items-center justify-center gap-8">
        <p
          className="text-base md:text-lg themeText font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Alemeno assignment
        </p>

        <p
          className="hidden md:block text-sm italic font-regular cursor-pointer themeText"
          onClick={() => navigate("/all_courses")}
        >
          All courses
        </p>
      </div>
      <div className="flex items-center gap-[20px]">
        <div
          className="themeText w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-black/[0.3] dark:hover:bg-white/[0.3] transition-all ease-in-out p-2 rounded-full"
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} size="lg" />
        </div>
        <div className="hidden md:block w-4 md:w-8 h-4 md:h-8 bg-gray-500 rounded-full p-4 relative overflow-hidden">
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-700 w-full h-[80%] absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>

        <div className="block md:hidden">
          <CustomMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
