import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../components/Cart";
import classes from "./NavHeader.module.css";
import Button from "../components/UI/Button";

const Navheader = () => {

    const [openCart, setOpenCart] = useState(false);

    const cartOpenHandler = () => {
        setOpenCart(true)
    }

    const cartCloseHandler = () => {
        setOpenCart(false)
    }

    return (

        <><nav className={classes.header} >
            <h5>Pethanan's Project</h5>
            <Button className={classes.links} onClick={cartOpenHandler} value="Cart"></Button>
        </nav >

            {openCart && <Cart cartCloseHandler={cartCloseHandler}></Cart>}</>
    )

}

export default Navheader;