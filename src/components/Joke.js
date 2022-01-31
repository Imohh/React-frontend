import React, {useState} from 'react'

function Joke() {
    const [count, setCount] = useState(0);

    function decrement() {
        setCount(count - 1)
    }

    function increment() {
        setCount(count + 1)
    }

    const firstName = "Bob";
    const lastName = "Ziroll"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay;

    if (hours < 12 ) {
        timeOfDay = "morning"
    } else if (hours === 12 || hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening"
    }




    return (
        <div>
            <button onClick={() => decrement()}>-</button>
            <span>{count}</span>
            <button onClick={() => increment()}>+</button>

            <p>Hello {firstName} {lastName}</p>
            <h1>Good {timeOfDay}</h1>
        </div>
    )
}

export default Joke