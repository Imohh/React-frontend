import React from 'react'

function Joke(props) {
    console.log(props)
    return (
        <div>
            <h1 style={{background:"red"}}>Question: {props.question}</h1>
            <p style={{background: !props.question && "blue"}}>Answer: {props.PunchLine}</p>
        </div>
    )
}

export default Joke