import { useState } from 'react'

const Question = ({id,question,detail}) => {
    const [showText, setShowText] = useState(false)

    return (
        <>
            <h3>{question}</h3>
            <button onClick={() => setShowText(!showText)}>{showText ? '-' : '+'}</button>
            {showText && <p>{detail}</p>}
        </>
    )
}

export default Question