import React, { useContext } from "react";
import CartCtx from "../store/cartCtx";
import { Col, Row, Button } from "react-bootstrap";
import classes from "./MenuItem.module.css"

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
        <li className={classes["menu-item"]}>
            <Row>
                <Col>{props.item.name}</Col>
                <Col>{props.item.price}</Col>
                <Col>{props.item.description}</Col>
                <Col>                <Button variant="primary" onClick={buttonOneHandler}>Order 1 </Button>
                </Col>
                <Col><Button onClick={buttonTwoHandler}>Order 2 </Button></Col>
                <Col>                <Button onClick={buttonThreeHandler}>Order 3 </Button>
                </Col>
            </Row>

        </li>
    )
}

export default MenuItem;