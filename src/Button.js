import React, { useState } from 'react'

const Button = (props) => {
    const [ toggle, setToggle ] = useState(false)
    return (
        <>
            <button
            onClick={() => {
                setToggle(!toggle)
            }}>Button From Child</button>
            {toggle && <span>Toggle</span>}

        </>
    )
}

export default Button