import React from 'react'
import axios from 'axios'

const ConstComponent = () => {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http:localhost/')
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }

    const {posts} = this.state

    return (
        <>

        </>
    )
}

export default ConstComponent