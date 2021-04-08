import React, { useState } from 'react'
import Form from "./components/Form"
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([])
  return (
    <div className="h-screen w-screen bg-main flex font-family  bg-cover bg-no-repeat z-0 ">
      <div className="container bg-white rounded-xl mx-auto my-auto w-1/4 h-5/6 flex flex-col shadow-xl bg-opacity-60">
        <h2 className="text-4xl font-semibold	text-center flex mx-auto mt-4 mb-4 text-primary">Bucket List</h2>
        <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
      
    </div>
  )
}

export default App