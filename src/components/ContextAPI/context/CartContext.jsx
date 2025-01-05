import { createContext, useState } from "react";


const CartContext = createContext();

const CartProvider = (props) => {


    const [cart, setCart] = useState(
        [{ name: '', price: null }]

    );


    return <CartContext.Provider value={{ cart, setCart }}>{props.children}</CartContext.Provider>
}

export { CartContext, CartProvider };