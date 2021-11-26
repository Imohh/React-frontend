import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import Product from './Product'

export default class Home extends Component{

    
    state = {
        customersCount: 5,
        customers: [
            {id:1,name:"scott", phone:"123-456", address:{city: "Lagos"}},
            {id:2,name:"Imoh", phone:"548-449", address:{city: "Abuja"}},
            {id:3,name:"Precious", phone: null,  address:{city: "London"}},
            {id:4,name:"Ayo", phone:"066-682", address:{city: "Manitoba"}},
            {id:5,name:"Balogun", phone:"745-734", address:{city: "New York"}},
        ],
        products: [
            {id:1,productName:"Prada", phone:"123-456"},
            {id:2,productName:"Louis Vuitton", phone:"548-449"},
            {id:3,productName:"Dior", phone: null},
            {id:4,productName:"Zara", phone:"066-682"},
            {id:5,productName:"Balenciaga", phone:"745-734"},
        ],
    }


    render() {
        
        return (
            <div>
                <h1>This is the Home Page</h1>
                {/* <Link to="/about">About</Link>
                <Link to="/">Go Back</Link> */}
    

                
                
                <span>{this.state.customersCount}</span>
                <button 
                onClick={this.onRefreshClick}>
                    refresh
                </button>

                
                {/* <table>
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
                </table> */}
            
            {this.state.products.map((prod) => {
                return <Product key={prod.id} id={prod.id}/>
            } )}
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

