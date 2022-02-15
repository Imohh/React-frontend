import { useState } from 'react'

const Tour = ({id,name,height,text,onDelete}) => {
    const [showText, setShowText] = useState(false)
    const displayText = () => {
        setShowText(!showText)
    }

    return (
        <>
            <h1>{name}</h1>
            <h3>{height}</h3>
            <p>{showText ? text : `${text.substring(0,200)}...`}</p>
            
            <button onClick={displayText}>{showText ? 'show less' : 'show more'}</button>
            <button onClick={() =>onDelete(id)}>Clear Tour</button>
        </>
    )
}

export default Tour