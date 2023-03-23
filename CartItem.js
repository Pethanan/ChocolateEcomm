import React from "react";
import { Col, Row } from "react-bootstrap";

const CartItem = (props) => {

    return (
        <Row>
            <Col>{props.item.name}</Col>
            <Col>{props.item.description}</Col>
            <Col>{props.item.quantity}</Col>
            <Col>{props.item.itemTotalAmount}</Col>
        </Row>
    )

}

export default CartItem;