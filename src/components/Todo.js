import React from "react";

function Todo({ text, todo }) {
  return (
    <div className="flex w-full h-auto bg-white my-1.5 p-4 bg-gray-100 flex justify-between px-4 font-sans ">
      <li
        className={`todo-item ${
          todo.completed ? "completed" : ""
        } text-gray-400 text-2xl`}
      >
        {text}
      </li>
      <div className="icons flex mx-2 text-xl">
        <button className="complete-btn text-green-500 mx-2">
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn text-red-500">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
