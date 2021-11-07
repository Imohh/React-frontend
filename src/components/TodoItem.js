import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo">
            <input type="checkbox" checked={props.item.completed} onChange={()=> console.log("changed")} />
            <p>{props.item.text}</p>
        </div>

    )
}

export default TodoItem