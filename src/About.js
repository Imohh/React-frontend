import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class About extends React.Component{

    
    constructor(props) {
        super(props)
        this.state = {
            posts: "hey there"
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }

    render() {
        return (
            <main style={{ padding: "1rem 0" }}>
              <h2>This is the About Page</h2>
              <Link to="/home">Home</Link> |{" "}
              <Link to="/">Go Back</Link>
              
            </main>
        )
    }
  }

  export default About