import {useState} from 'react'

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
    const displayInfo = () => {
        setShowInfo(!showInfo)
    }

    return (
        
        <>
            <article>
                <header>
                    <h4>{title}</h4>
                     <button onClick={displayInfo}>{showInfo ? "-" : "+"}</button>
                </header>
                {showInfo && <p>{info}</p>}
            </article>
        </>
    )
}

export default Question