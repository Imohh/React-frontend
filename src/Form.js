import React, {Component} from 'react'

class Form extends Component {
    constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: ""
      }
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    render() {
      return(
        <div>
          <form>
            <input 
              name="firstName"
              type="text" 
              placeholder="First Name" 
              onChange={this.handleChange}
            />
  
            <input 
              name="lastName"
              type="text" 
              placeholder="Last Name" 
              onChange={this.handleChange}
            />
  
            <textarea value={"Some default value"} />
  
          </form>
          
        
        <h2>{this.state.firstName} {this.state.lastName}</h2>
  
        </div>
      )
    }
  }
  
  
  
  export default Form