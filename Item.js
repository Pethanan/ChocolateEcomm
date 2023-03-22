import React, { useContext } from "react";
import { Button, Row, Col } from "react-bootstrap";
import CartCtx from "../store/cartCtx";

const Item = (props) => {

    const cartCtx = useContext(CartCtx)

    const addToMenu = () => {
        cartCtx.addToMenu(props.item);
    }

    return (
        <Row key={props.key} style={{ padding: "20px", color: "rgb(10, 10, 30)", fontWeight: "bold" }}>
            <Col>{props.item.name}</Col>
            <Col>Rs. {props.item.price}</Col>
            <Col>{props.item.description}</Col>
            <Col><Button item={props.item} onClick={addToMenu}>Order</Button></Col>
        </Row>

    )

}

export default Item;