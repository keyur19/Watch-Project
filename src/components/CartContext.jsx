import React, { createContext, useState, useEffect } from "react";

// we made one context
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    // make one state
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [] ;
    });

      // Save cart items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    },[cartItems]);

    // add items in cart
    // might be call in onclick event
    const addToCart = (item) => {
        const itemExists = cartItems.some(cartItem => cartItem.alt === item.alt);
        if (itemExists) {
            alert("Already in cart");
        } else {
            alert("Item Added In Cart");
            setCartItems([...cartItems, item]);
        }
        // setCartItems([...cartItems, item]);
    };

    const removeFromCart = (item) => {
     setCartItems((prevItems) => prevItems.filter(i => i.alt !== item.alt));
        // setCartItems((prevItems) => prevItems.filter(i => i.key !== item.key));
    }

    return(
        <CartContext.Provider value = {{cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
