import React, { useContext } from "react";
import CartCtx from "../store/cartCtx";
import MenuItem from "./MenuItem";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Menu.module.css"


const Menu = () => {
    const cartCtx = useContext(CartCtx);

    const MenuItems = cartCtx.menuItmes.map((item) => <MenuItem key={item.id} item={item}>
    </MenuItem>)

    return (
        <>
            <Container className={classes["cart-title"]}>
                <h4>Items Ready to add to Cart</h4>
            </Container>

            <ul className={classes.menu}>
                <Row style={{ marginLeft: "-2px", backgroundColor: "rgba(29, 29, 91, 0.909)", color: "white", padding: "9px 0" }}>
                    <Col>Item Name</Col>
                    <Col>Price</Col>
                    <Col>Description</Col>
                    <Col>To Order 1</Col>
                    <Col>To Order-2</Col>
                    <Col>To Order-3</Col>



                </Row>
                {MenuItems}
            </ul>
        </>
    )


}

export default Menu;