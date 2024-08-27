import React from "react";
import Button from "./Button.jsx";
function Nav() {
  return (
    <nav>
      <div className="flex items-center justify-between mt-3">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold dark:text-white text-green-900 p-2 select-none">
            To-Do List📝
          </h1>
        </div>
        <div className="p-2 slect-none">
          <Button />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
