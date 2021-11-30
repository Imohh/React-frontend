import React from 'react'

export default class State extends React.Component {
    state = {
        images: [
            "https://imohcodes.com/assets/img/header2.jpg",
            "https://imohcodes.com/assets/img/header.jpg",
            "https://imohcodes.com/assets/img/header2.jpg",
            "https://imohcodes.com/assets/img/header.jpg"
        
        ],
        idx: 0,
    }

    handleNext = () => {
        this.setState({
            idx: this.state.idx + 1,
        })
    }

    handlePrev = () => {
        this.setState({
            idx: this.state.idx - 1,
        })
    }


    render() {
        return(
            <div>
                State starts here
                <br/>
                 <img 
                 src={this.state.images[this.state.idx]} 
                 alt="" 
                 width="90px"/>
                 <button onClick={this.handlePrev}>prev</button>
                <button onClick={this.handleNext}>next</button>
                 <br/><br/>
                
            </div>
        )
    }
}
