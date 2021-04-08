import React from 'react'
import Todo from "./Todo"

function TodoList({todos,setTodos}) {
    return (
       <>
        <ul className="todo-list">
            {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
       </>
    )
}

export default TodoList;