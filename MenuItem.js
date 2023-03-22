import React, { useContext } from "react";
import CartCtx from "../store/cartCtx";

const MenuItem = (props) => {

    const cartCtx = useContext(CartCtx);

    const buttonOneHandler = () => {
        cartCtx.addToCart(props.item, 1)
    }
    const buttonTwoHandler = () => {
        cartCtx.addToCart(props.item, 2)
    }
    const buttonThreeHandler = () => {
        cartCtx.addToCart(props.item, 3)
    }
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td>{props.item.price}</td>
            <button onClick={buttonOneHandler}>Order 1 </button>
            <button onClick={buttonTwoHandler}>Order 2 </button>
            <button onClick={buttonThreeHandler}>Order 3 </button>

        </tr>
    )
}

export default MenuItem;