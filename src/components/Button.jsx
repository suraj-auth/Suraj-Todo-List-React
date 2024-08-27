import React, { useRef, useState } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
function Button() {
  const spanref = useRef();
  return (
    <div className="relative select-none">
      <input
        type="checkbox"
        id="checkbox"
        className="sr-only"
        onClick={() => {
          spanref.current.classList.toggle("translate-x-7");
          spanref.current.classList.toggle("sm:translate-x-9");
          document.documentElement.classList.toggle("dark");
        }}
      />
      <label
        htmlFor="checkbox"
        className="sm:h-10 h-7 w-14 sm:w-20 cursor-pointer rounded-3xl bg-green-950 dark:bg-blue-700 flex items-center gap-3 sm:gap-4"
      >
        <img className="h-4 sm:h-6 ml-1 sm:ml-3" src={sun} alt="sun" />
        <img className="h-4 sm:h-6" src={moon} alt="moon" />
        <span
          ref={spanref}
          className="h-5 sm:h-8 sm:w-8 w-5 absolute left-1 sm:left-2 transition-all duration-300 rounded-3xl dark:bg-gray-800 bg-lime-400"
        ></span>
      </label>
    </div>
  );
}

export default Button;
