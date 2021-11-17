import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state= {
            topText: "This is the top text",
            bottomText: "This is the bottom text",
            randomImage: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    

    // async componentDidMount() {
    //     fetch("https://api/imgflip.com/get_memes")
    //     .then(response => response.json())
    //     .then(response => {
    //         const{memes} = response.data
    //         console.log(memes[0])
    //         this.setState({allMemeImgs: memes})
    //     })
        
    // }


    memeChange() {

    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }


    render() {
        
        


        return (
            <div>
                <form className="meme-form">
                    <input 
                        placeholder="Top Text"
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="Bottom Text"
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.memeChange}>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>

            </div>
        )
    }
}

export default MemeGenerator