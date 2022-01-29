import React from 'react'
import './style/home.css'
import Header from './Header'

function Home () {
 return (
    <>
        <Header />
        <h1>Home Page</h1>
        <button>Button</button>

        <div className="first_home">
            <div className="inner_home">
                <h1>Testing SCSS</h1>
            </div>
        </div>

        <div className="second_home">
            <div className="second_inner">
                <h2>Heading</h2>
                <p>This is the first paragraph. This is the first paragraph. This is the first paragraph.
                This is the first paragraph. This is the first paragraph.
                This is the first paragraph. This is the first paragraph.
                </p>
            </div>   
        </div>

    </>
 )
}

export default Home