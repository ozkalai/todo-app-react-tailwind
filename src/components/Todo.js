import React from 'react'

function Todo({text ,todo}) {
    return (
        <div className="flex w-full h-auto bg-white my-1.5 p-4">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            {text}
            </li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;