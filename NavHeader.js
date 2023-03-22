import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavHeader.module.css";

const Navheader = () => {

    return (
        <nav className={classes.header}>
            <NavLink to="/" className={classes.links}>Items Page</NavLink>
            <NavLink to="/CartPage" className={classes.links}>Cart</NavLink>
        </nav >
    )

}

export default Navheader;