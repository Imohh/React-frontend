import React, {Component} from 'react'
import './App.css'
//import Conditional from './Conditional'
// import TodoItem from './components/TodoItem'
// import todosData from './todosData'
// import Example from './Example'
// import myExample from './myExample'


//TODO ITEM
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     console.log("changed", id)
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} 
//     handleChange={this.handleChange}/>)
//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     )
//   }
// }




// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//   }
//   render() {
//     let wordDisplay
//     if(this.state.isLoggedIn === true) {
//       wordDisplay = "in"
//     } else {
//       wordDisplay = "out"
//     }
//     return (
//       <div>
//         <h1>You are currently logged {wordDisplay}</h1>
//       </div>
//     )
//   }
// }


//HANDLING EVENTS
//function handleClick() {
//  console.log("I was hovered!")
//}
// class App extends React.Component {
//   render() {

//     return (
//       <div>
//         <img onMouseOver={handleClick} src="logo192.png" alt="hey there"/>
//         <br />
//         <br />
//         <button>Click me</button>
//       </div>
//     )
//   }
// }

//CHANGING STATE
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     )
//   }
// }

//LIFECYCLE METHODS
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {}
//   }

//   static getDerivedStateFromProps(props, state) {

//   }

//   //componentWillMount() {

//   //}

//   componentDidMount() {

//   }

//   componentWillReceiveProps() {

//   }

//   shouldComponentUpdate() {

//   }

//   componentWillUnmount() {

//   }

//   render() {
//     return (
//       <div>
//         Code goes here
//       </div>
//     )
//   }
// }



//CONDITIONAL RENDERING
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 1500)
//   }

//   render() {
//     return(
//       <div>
//         <Conditional isLoading={this.state.isLoading}/>
//       </div>
//     )
//   }
// }


//CONDITIONAL RENDERING
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       unreadMessages: [
//         "Call mom now!",
//         "New spam email available. All links are definitely safe to click."
//       ]
//     }
//   }

//   render() {
//     return (
//       <div>
//         {
//           this.state.unreadMessages.length > 0 &&
//           <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//         }
//       </div>
//     )
//   }
// }


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    return(
      <div>
        {this.state.isLoggedIn ? <h2>This user is Logged In</h2>
        : <h2>This user is not logged In</h2>}
      </div>
    )
  }
}

export default App