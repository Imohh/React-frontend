import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

class Home extends React.Component{

    state = {
        loading: true
    }

    async componentDidMount() {
        const url ="https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    render() {
        
        return (
            <div>
                <h1>This is the Home Page</h1>
                {/* <Link to="/about">About</Link>
                <Link to="/">Go Back</Link> */}
    
                {this.state.loading ? <h1>loading...</h1>:<h1>not loading yet...</h1>}
            </div>
        )
    }

    
}
export default Home