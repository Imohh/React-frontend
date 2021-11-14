import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component{
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
    }
    render() {
        return (
            <div>
                <h1>This is the Home Page</h1>
                {/* <Link to="/about">About</Link>
                <Link to="/">Go Back</Link> */}
    
    
    
            </div>
        )
    }

    
}
export default Home