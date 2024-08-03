"use client";
import { useEffect, useRef, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkLightToggler = () => {
  const [toggleDark, setToggleDark] = useState(false);

  const Toggle = () => {
    setToggleDark(!toggleDark);
  };

  useEffect(() => {
    toggleDark
      ? window.document.children[0].classList.add("dark")
      : window.document.children[0].classList.remove("dark");
  }, [toggleDark]);

  return (
    <div
      onClick={Toggle}
      className="btn-container translate-y-3 relative border-2 border-main-dark dark:border-main-green overflow-hidden h-6 w-12 rounded-full cursor-pointer"
    >
      <div
        className={`slider flex justify-between items-center absolute h-4 w-16 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
          toggleDark ? "translate-x-[2px]" : "-translate-x-[22px]"
        }`}
      >
        <FaMoon className="text-white z-10" />
        <FaMoon className="text-white scale-105 absolute blur-sm " />

        <div
          className={`thumb  h-4 w-4 rounded-full bg-main-dark dark:bg-main-green`}
        ></div>
        <FaSun className="text-yellow-400" />
      </div>
    </div>
  );
};

export default DarkLightToggler;
