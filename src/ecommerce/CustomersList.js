import React, {Component} from 'react'

export default class CustomersList extends Component {
    state = {
        appTitle: 'hello',
        customersCount: 5,
        customer: [
            {id: 1, name: 'Michael Scott', phone: '123456'},
            {id: 2, name: 'Jim Halpert', phone: '349583'},
            {id: 3, name: 'Dwight Schrute', phone: '675364'}
        ]
    }

    render() {
        return (
            <>
                {/* <h2>{this.state.appTitle}
                    <span>{this.state.customersCount}</span>
                </h2>
                <button onClick={this.updateState}>update</button>
                {this.state.customer.map((item) => (
                    <article key={item.id}>
                        <h2>{item.name}</h2>
                    </article>
                ))} */}
            </>
        )
    }

    // updateState = () => {
    //     this.setState({
    //         customersCount: 7
    //     })
    // }
}