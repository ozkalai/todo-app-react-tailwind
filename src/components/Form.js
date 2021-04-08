import React from 'react'

function Form({inputText ,setInputText , setTodos ,todos}) {
    const clickHandler = (e) => {
        e.preventDefault();
    setTodos([
      { text: inputText, completed: false, id: Math.ceil(Math.random() * 1000) },...todos
    ]);
    setInputText("");
  };
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    return (
        <div className="flex justify-center items-center bg-white  mx-auto rounded-2xl border-gray-100 border-2 ">
            <form className="">
                <input
                className="w-full box-border outline-none bg-transparent text-gray-50 placeholder-gray-300 text-2xl ml-2 p-2 flex"
                placeholder="New"
                onChange={inputTextHandler}
                value={inputText}
                type="text"
                />
            </form>
            <i onClick={clickHandler} className="fas fa-thumbtack text-primary mr-4 text-lg"></i>

            
        </div>
    )
}

export default Form;