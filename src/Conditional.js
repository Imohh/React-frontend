import React from 'react'

function Conditional(props) {
    return (
        //condition ? statement if true : statement if false
        <div>

            {props.isLoading ? <h1>Loading...</h1> : <h1>Not loading!</h1>}

        </div>
    )
    // if(props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }
    // return (
    //      <h1>Not loading!</h1>
    // )
    
}

export default Conditional