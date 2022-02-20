import React from 'react'

const Product = ({prod, onIncrement,onDecrement,onDelete}) => {
    const {productName,price,quantity} = prod
    
    return (
        <>
                <h4>{productName}</h4>    
                <h3>{price}</h3>
                <p>{quantity}</p>

                <span><button onClick={() => onDecrement(prod,0)}>-</button></span>
                <span><button onClick={() => onIncrement(prod,10)}>+</button></span>

                <br />
                <br />
                <button>Buy Now</button>
                <br />
                <button onClick={() => onDelete(prod)}>Delete</button>
        </>
    )
}

export default Product