import React from "react";

function Form({ inputText, setInputText, setTodos, todos }) {
  const clickHandler = (e) => {
    e.preventDefault();
    setTodos([
      {
        text: inputText,
        completed: false,
        id: Math.ceil(Math.random() * 1000),
      },
      ...todos,
    ]);
    setInputText("");
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="flex justify-center w-full mb-6 pb-6 border-b-2 border-gray-100 items-center bg-white  mx-auto ">
      <form className="flex w-full  rounded-2xl border-gray-100 border-2 mx-2">
        <input
          className="w-full box-border outline-none bg-transparent text-gray-600 placeholder-gray-300 text-2xl ml-2 p-4 flex"
          placeholder="New"
          onChange={inputTextHandler}
          value={inputText}
          type="text"
        />
        <button onClick={clickHandler}>
          <i className="fas fa-thumbtack text-blue-500 mr-4 text-lg outline-none"></i>
        </button>
      </form>
    </div>
  );
}

export default Form;
