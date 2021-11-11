import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return(
        <div>
            <h3>Logo</h3>
            <ul className="list__items">
                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav