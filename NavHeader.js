import React from "react";
import { NavLink } from "react-router-dom";

const Navheader = () => {

    return (
        <nav style={{ padding: "30px" }}>
            <NavLink to="/CartPage" style={{ marginRight: "30px" }}>Cart</NavLink>
            <NavLink to="/">Items Page</NavLink>
        </nav>
    )

}

export default Navheader;