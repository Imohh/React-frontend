import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class About extends React.Component{
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