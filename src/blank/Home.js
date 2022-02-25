import React, {useState} from "react"

const Home = () => {
   const [resource, setResource] = useState('')

    return (
        <>
            <button onClick={() => setResource('breakfast')}>breakfast</button>
            {/* <button onClick={() => setResource('lunch')}>lunch</button> */}

            <p>{resource}</p>
        </>
    )
}

export default Home
