import React, { useContext } from "react";
import CartCtx from "../store/cartCtx";
import { Col, Row } from "react-bootstrap";
import classes from "./MenuItem.module.css";
import Button from "./UI/Button";

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
            <Row key={props.item.id} className={classes.row}>
                <Col>{props.item.name}</Col>
                <Col>{props.item.price}</Col>
                <Col>{props.item.description}</Col>
                <Col>                <Button variant="primary" onClick={buttonOneHandler} className="button" value="Order 1"></Button>
                </Col>
                <Col><Button onClick={buttonTwoHandler} className="button" value="Order 2">Order 2 </Button></Col>
                <Col>                <Button onClick={buttonThreeHandler} value="Order 3">Order 3 </Button>
                </Col>
            </Row>

        </li>
    )
}

export default MenuItem;