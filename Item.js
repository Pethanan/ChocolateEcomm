import React, { useContext } from "react";
import CartCtx from "../store/cartCtx";

const Item = (props) => {

    const cartCtx = useContext(CartCtx)

    const addToMenu = () => {
        cartCtx.addToMenu(props.item);
    }

    return (
        <tr key={props.key} style={{ margin: "30px" }}>
            <td>{props.item.name}</td>
            <td>Rs. {props.item.price}</td>
            <td>{props.item.description}</td>
            <button item={props.item} onClick={addToMenu}>Order</button>
        </tr>

    )

}

export default Item;