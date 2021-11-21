import React, {useRef} from 'react'

export default function Crash() {
    const inputRef = useRef()
    return (
        <div>
            <input 
                ref={inputRef}
                type="text"
                name="firstName"
                placerholder="first name"
            />d

            <button onClick={() => {
                console.log(inputRef.current)
            }}>Click!</button>
        </div>
    )
}
