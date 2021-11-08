import React from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import todosData from './todosData'
// import Example from './Example'
// import myExample from './myExample'


//TODO ITEM
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log("changed", id)
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}




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

export default App