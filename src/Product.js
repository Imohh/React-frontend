import React, {Component} from 'react'

export default class Product extends Component {
    render() {
        console.log(this.props.id)
        return (
            <div>
                Product #{this.props.id}
            </div>
        )
    }
    
}
