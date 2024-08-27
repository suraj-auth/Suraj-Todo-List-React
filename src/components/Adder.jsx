import React, { useRef } from "react";
import { useContext } from "react";
import { propContext } from "../context/context";
function Adder() {
  const { getalldata } = useContext(propContext);
  const inRef = useRef();
  function adddata(value) {
    let obj = {
      isDone: false,
      iseditable: false,
      task: value.toUpperCase(),
      id: Date.now(),
    };
    localStorage.setItem(Date.now(), JSON.stringify(obj));
    getalldata();
  }
  return (
    <div className="relative p-6 sm:p-7 m-5 rounded-3xl">
      <input
        ref={inRef}
        className="absolute p-3 left-0 top-0 w-full pr-28 sm:pr-36 h-full rounded-3xl text-black font-medium sm:text-xl border-hidden outline-none"
        type="text"
        placeholder="Enter your task"
      />
      <button
        className="absolute h-full w-2/6 bg-green-950 text-white rounded-3xl right-0 top-0 dark:bg-teal-500 select-none border-hidden outline-none font-bold"
        onClick={() => {
          if (inRef.current.value.trim() != "") {
            adddata(inRef.current.value.trim());
            inRef.current.value = "";
          }
        }}
      >
        Add task
      </button>
    </div>
  );
}

export default Adder;
