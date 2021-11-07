import React from 'react'

function Example(props) {
    return (
        <div>
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Example