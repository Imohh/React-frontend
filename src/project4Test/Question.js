import {useState} from 'react'

const Question = ({question,detail}) => {
    const [display,setDisplay] = useState(false)

    return (
        <>
            <h4>{question}</h4>
            {display && <p>{detail}</p>}
            <button onClick={()=> setDisplay(!display)}>{display ? '-' : '+' }</button>
        </>
    )
}

export default Question