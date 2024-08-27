import React, { useEffect, useState } from "react";
import Adder from "./Adder";
import { propContext } from "../context/context";
function Home() {
  const [task, setTask] = useState([]);

  // adding all data in the app
  function getalldata() {
    let allData = [];
    setTask([]);
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      allData.push(JSON.parse(value));
    }
    setTask(allData);
  }

  // updating data is completed or not
  function updatetask(i, t, is) {
    let obj = { isDone: !is, task: t.trim(), id: i, iseditable: false };
    localStorage.setItem(i, JSON.stringify(obj));
    getalldata();
  }

  // updating task for inserting input field
  function changetask(i, t) {
    let obj = { isDone: false, task: t, id: i, iseditable: true };
    localStorage.setItem(i, JSON.stringify(obj));
    getalldata();
  }

  // inserting new value in the input field
  function inputtask(i, t) {
    let taskObj = JSON.parse(localStorage.getItem(i));
    taskObj.task = t;
    localStorage.setItem(i, JSON.stringify(taskObj));
    getalldata();
  }

  // deleting task
  function deletetask(id) {
    localStorage.removeItem(id);
    getalldata();
  }
  useEffect(() => {
    getalldata();
  }, []);
  return (
    <propContext.Provider value={{ getalldata }}>
      <main>
        <div>
          <Adder />
          <div>
            {task &&
              task.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-2 border-black p-2 sm:p-2 rounded-3xl mt-2 sm:mt-5 bg-emerald-500 dark:bg-blue-800 w-9/10 m-auto"
                >
                  <div>
                    {item.isDone ? (
                      <i
                        className="sm:text-2xl text-xl dark:text-emerald-300 fa-solid fa-circle-check"
                        onClick={() => {
                          updatetask(item.id, item.task, item.isDone);
                        }}
                      ></i>
                    ) : (
                      <i
                        className="sm:text-2xl text-xl dark:text-emerald-300 fa-regular fa-circle "
                        onClick={() => {
                          updatetask(item.id, item.task, item.isDone);
                        }}
                      ></i>
                    )}
                  </div>
                  {item.iseditable ? (
                    <input
                      type="text"
                      value={item.task}
                      className="sm:text-xl bg-emerald-500 border border-black outline-none rounded w-6/10 font-medium dark:text-white"
                      onChange={(e) => {
                        inputtask(item.id, e.currentTarget.value);
                      }}
                    />
                  ) : (
                    <div
                      className={`sm:text-xl w-6/10 ${
                        item.isDone ? "line-through" : ""
                      } font-medium dark:text-white`}
                    >
                      {item.task}
                    </div>
                  )}
                  <div className="flex p-2 gap-4">
                    {item.iseditable ? (
                      <i
                        className="dark:text-stone-300 cursor-pointer fa-solid fa-check"
                        onClick={() => {
                          updatetask(item.id, item.task.toUpperCase(), true);
                        }}
                      ></i>
                    ) : (
                      <i
                        className="dark:text-stone-300 cursor-pointer fa-regular fa-pen-to-square"
                        onClick={() => {
                          changetask(item.id, item.task);
                        }}
                      ></i>
                    )}
                    <i
                      className="dark:text-stone-300 cursor-pointer fa-solid fa-trash"
                      onClick={() => {
                        deletetask(item.id);
                      }}
                    ></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </propContext.Provider>
  );
}

export default Home;
