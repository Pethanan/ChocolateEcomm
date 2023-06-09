import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import CartCtx from "../store/cartCtx";
import classes from "./Item.module.css"
import Button from "./UI/Button";

const Item = (props) => {

    const cartCtx = useContext(CartCtx)

    const addToMenu = () => {
        console.log("clicker here")
        cartCtx.addToMenu(props.item);
    }

    return (
        <Row key={props.item.id} style={{ padding: "20px", color: "rgb(10, 10, 30)", fontWeight: "bold" }}>
            <Col>{props.item.name}</Col>
            <Col>Rs. {props.item.price}</Col>
            <Col>{props.item.description}</Col>
            <Col><Button item={props.item} onClick={addToMenu} value="Add">Order</Button></Col>
        </Row>

    )

}

export default Item;