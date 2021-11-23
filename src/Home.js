import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

class Home extends React.Component{

    

    // FETCH API
    // state = {
    //     loading: true,
    //     person: null
    // }

    // async componentDidMount() {
    //     const url ="https://api.randomuser.me/"
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     this.setState({person: data.results[0], loading: false})
    // }
    // END OF FETCH API

    state = {
        customersCount: 5,
        customers: [
            {id:1,name:"scott", phone:"123-456", address:{city: "Lagos"}},
            {id:2,name:"Imoh", phone:"548-449", address:{city: "Abuja"}},
            {id:3,name:"Precious", phone: null,  address:{city: "London"}},
            {id:4,name:"Ayo", phone:"066-682", address:{city: "Manitoba"}},
            {id:5,name:"Balogun", phone:"745-734", address:{city: "New York"}}
        ]
    }

    render() {
        
        return (
            <div>
                <h1>This is the Home Page</h1>
                {/* <Link to="/about">About</Link>
                <Link to="/">Go Back</Link> */}
    

                {/* FETCH API */}
                {/* {this.state.loading || !this.state.person ? 
                <h1>loading...</h1>
                :
                <div>
                    <div>{this.state.person.name.first}</div> 
                    <div>{this.state.person.name.last}</div>
                </div> */}
                {/* // END OF FETCH API */}
                {/* } */}
                
                <span>{this.state.customersCount}</span>
                <button 
                onClick={this.onRefreshClick}>
                    refresh
                </button>

                
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((cust) => {
                                return (
                                <tr key={cust.id}>
                                    <td>{cust.id}</td>
                                    <td>{cust.name}</td>
                                    <td>{this.getPhoneToRender(cust.phone)}</td>
                                    <td>{cust.address.city}</td>
                                </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            
            
            </div>
        )
    }

    onRefreshClick = () => {
        this.setState ({
            customersCount: 7
        })
    }

    getPhoneToRender = (phone) => {
        if(phone) {
            return phone
        } else {
            return (
                <div>No Phone</div>
            )
        }
    }

}

    

export default Home