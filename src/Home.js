import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

class Home extends React.Component{


    //FETCH API
    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url ="https://api.randomuser.me/"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({person: data.results[0], loading: false})
    }
    //END OF FETCH API


    

    render() {
        
        return (
            <div>
                <h1>This is the Home Page</h1>
                {/* <Link to="/about">About</Link>
                <Link to="/">Go Back</Link> */}
    

                {/* FETCH API */}
                {this.state.loading || !this.state.person ? 
                <h1>loading...</h1>
                :
                <div>
                    <div>{this.state.person.name.first}</div> 
                    <div>{this.state.person.name.last}</div>
                </div>
                // END OF FETCH API
                }

                
                
            </div>
        )
    }

    
}
export default Home