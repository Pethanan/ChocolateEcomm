import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./UI/Button";
import CartCtx from "../store/cartCtx";
import CartItem from "./CartItem";
import CartModal from "./UI/CartModal";

const Cart = (props) => {

    const cartCtx = useContext(CartCtx);

    const orderedItems = cartCtx.orderedItems.map((item) => <CartItem key={item.id} item={item}></CartItem>);

    return (
        <>
            <CartModal>
                <h3>Cart Items</h3>
                <Container closeCartHandler={props.cartCloseHandler}>
                    <Row>
                        <Col>Name</Col>
                        <Col>Description</Col>
                        <Col>Quantity</Col>
                        <Col>Item Total Amnt</Col>
                    </Row>
                    {orderedItems}
                </Container>
                <h5>total Amount: Rs. {cartCtx.totalCartAmount}</h5>
                <Button onClick={props.cartCloseHandler} value="Close"></Button>

            </CartModal >
        </>

    )
}

export default Cart;