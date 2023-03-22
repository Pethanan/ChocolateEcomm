import React, { useContext } from "react";
import CartCtx from "../store/cartCtx";
import MenuItem from "./MenuItem";
import { Container } from "react-bootstrap";
import classes from "./Menu.module.css"


const Menu = () => {
    const cartCtx = useContext(CartCtx);

    const MenuItems = cartCtx.menuItmes.map((item) => <MenuItem item={item}>
    </MenuItem>)

    return (
        <>
            <Container className={classes["cart-title"]}>
                <h4>Items Ready to add to Cart</h4>
            </Container>
            <ul className={classes.menu}>
                {MenuItems}
            </ul>
        </>
    )


}

export default Menu;