import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

const ProductList = () => {


    const cart = useContext(CartContext)

    const products = [
        {
            name: 'Iphone',
            price: 1000,
        },
        {
            name: 'Samsung',
            price: 900,
        }
    ]

    const AddToCardHandler = (name, price) => {
        cart.setCart([...cart.cart, { name: name, price: price }])
        console.log(cart)
    }


    const totalPrice = cart.cart.reduce((total, item) => total + item.price, 0);
    return (
        <div>
            <div sx={{ minWidth: 600 }} className=' inline-block m-4 p-5 bg-gray-200'>
                <h className='w-full'>Total Bill to pay: {totalPrice}</h>
            </div>

            <div className='flex '>
                {products.map((product, index) => (
                    <div key={index} className='w-1/4 bg-gray-200 p-4 m-4  rounded-sm'>
                        <h1 className='text-xl'>{product.name}</h1>
                        <h1 className='text-xl'>{product.price}</h1>
                        <Button variant='contained'
                            onClick={() => AddToCardHandler(product.name, product.price)}
                        >Add to Cart</Button>

                    </div>


                ))}


            </div>
        </div>
    )
}

export default ProductList
