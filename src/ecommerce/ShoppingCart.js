import React, {Component} from 'react'
import Product from './Product'

export default class ShoppingCart extends Component {
    state = {
        products: [
            {
                id: 1,
                productName: "iPhone",
                price: 8900,
                quantity: 0
            },
            {
                id: 2,
                productName: "Sony Camera",
                price: 4439,
                quantity: 0
            },
            {
                id: 3,
                productName: "Samsung LED TV",
                price: 7829,
                quantity: 0
            },
            {
                id: 4,
                productName: "iPad Pro",
                price: 8932,
                quantity: 0
            },
            {
                id: 5,
                productName: "Xbox",
                price: 5982,
                quantity: 0
            },
            {
                id: 6,
                productName: "Dell Monitor",
                price: 4843,
                quantity: 0
            },
        ]
    }
    render() {
        const handleIncrement = (product,maxValue) => {
            //get index of selected product
            let allProducts = [...this.state.products]
            let index = allProducts.indexOf(product)
    
            if(allProducts[index].quantity < maxValue) {
                allProducts[index].quantity++

                //update the state of current component (parent component)
                this.setState({products: allProducts})
            }
        }
        const handleDecrement = (product,minValue) => {
            let allProducts = [...this.state.products]
            let index = allProducts.indexOf(product)
            
            if(allProducts[index].quantity > minValue) {
                allProducts[index].quantity--

                this.setState({products: allProducts})
            }
        }
        const deleteItem = (product) => {
            let allProducts = [...this.state.products]
            let index = allProducts.indexOf(product)

            //delete products based on index

            allProducts.splice(index,1)   

            //update the state of current component (parent component)
            this.setState({products: allProducts})
        }
        return (
            <>
                {this.state.products.map((item) => {
                    return <Product 
                    key={item.id} 
                    prod={item} 
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={deleteItem}/>
                })}
            </>
        )
    }

    

    // const handleIncrement = (product) => {
    //     let allProducts = [...this.state.products]
    //     let index = allProducts.indexOf(product)
    //     allProducts[index].quantity++

    //     this.setState({products: allProducts})
    // }

}