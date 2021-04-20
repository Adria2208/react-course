import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.completed} 
                onChange={() => props.toggleCheck(props.id)}
            />

            <p className={props.completed ? 'checked' : null}>{props.text}</p>
        </div>
    )
}

export default TodoItem