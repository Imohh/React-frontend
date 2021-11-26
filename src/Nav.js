import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return(
        <div>
            <h3>Navbar</h3>
            <Link to="/about">About</Link> |{" "}
            <Link to="/home">Home</Link> |{" "}
            <Link to="/product">Product</Link>
        </div>
    )
}

export default Nav