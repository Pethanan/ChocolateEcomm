import React, { useContext } from "react";
import CartCtx from "../store/cartCtx";


const Cart = () => {

    const cartCtx = useContext(CartCtx);

    const orderedItems = cartCtx.orderedItems.map((item) => <tr><td>{item.name}</td> <td>{item.quantity}</td></tr>);

    return (
        <>
            <h1>Cart Items</h1>

            <table>
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Quantity
                        </td>
                    </tr>
                </thead>
                {orderedItems}
            </table>
            <h3>total Amount: Rs : {cartCtx.totalCartAmount}</h3>
        </>
    )



}

export default Cart;