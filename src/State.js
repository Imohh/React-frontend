import React from 'react'

export default class State extends React.Component {
    state = {
        images: [
            "https://imohcodes.com/assets/img/header2.jpg",
            "https://imohcodes.com/assets/img/header2.jpg",
            "https://imohcodes.com/assets/img/header.jpg",
        
        ]
    }
    render() {
        return(
            <div>
                State starts here
                <br/>
                 <img src={this.state.images[2]} alt="" width="90px"/>
                
            </div>
        )
    }
}
