import { useState } from "react";
import React from "react";

const CartCtx = React.createContext(
    {
        menuItmes: [],
        orderedItems: [],
        totalCartAmount: 0,
        addToCart: (item, quantity) => { },
        addToMenu: (item) => { },
    }
)

export const CartCtxProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [totalCartAmount, setTotalCartAmount] = useState(0);


    const addToCartHandler = (item, quantity) => {
        console.log("btn click")

        const itemToUpdateIndex = cartItems.findIndex((cartItem) => item.id === cartItem.id);

        const itemToUpdate = cartItems[itemToUpdateIndex];
        console.log(itemToUpdate)


        let updatedCartItems;

        if (itemToUpdate) {
            const updatedItem = { ...item, quantity: itemToUpdate.quantity + quantity, itemTotalAmount: itemToUpdate.itemTotalAmount + (item.price * quantity) };
            updatedCartItems = [...cartItems];
            updatedCartItems[itemToUpdateIndex] = updatedItem;
            const amountUpdate = totalCartAmount + (updatedItem.quantity * item.price);
            setCartItems(updatedCartItems);
            setTotalCartAmount(amountUpdate);
        }
        else {
            const updatedItem = { ...item, quantity: quantity, itemTotalAmount: item.price * quantity };
            updatedCartItems = [...cartItems, updatedItem];
            console.log(updatedCartItems)
            const amountUpdate = totalCartAmount + quantity * item.price;
            setCartItems(updatedCartItems);
            setTotalCartAmount(amountUpdate);
        }

    }

    const addToMenuHandler = (item) => {
        const existingItemIndex = menuItems.findIndex((itm) => itm.id === item.id)
        if (existingItemIndex === -1) {
            const updatedMenu = [...menuItems, item];
            setMenuItems(updatedMenu)
        }
        else {
            alert("Selected Item is already Available in the available items list")
        }

    }


    const cartContextValue = {
        menuItmes: menuItems,
        orderedItems: cartItems,
        totalCartAmount: totalCartAmount,
        addToCart: addToCartHandler,
        addToMenu: addToMenuHandler,
    }



    return (
        < CartCtx.Provider value={cartContextValue} >
            {props.children}
        </CartCtx.Provider >
    )

}

export default CartCtx;