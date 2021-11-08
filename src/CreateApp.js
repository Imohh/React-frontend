import React from 'react'
import ReactDom from 'react-dom'

// function App() {
//     return (
//         <div>
//             <Header />
//             <Grreting />
//         </div>
//     )
// }

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Greeting />
            </div>
        )
    }
}


function Header(props) {
    return (
        <Header>
            <p>Welcome, {props.username}</p>
        </Header>
    )
}

class Header extends React.Component {
    render() {
        return (
            <Header>
                <p>Welcome, {this.props.username}</p>
            </Header>
        )
    }
}

function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(date < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Evening"
    }

    return (
        <h1>Good {timeOfDay} to you!</h1>
    )

}

class Greeting extends React.Component {
    render(){
        return(
        )
    }
}