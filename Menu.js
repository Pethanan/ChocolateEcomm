import React, { useContext } from "react";
import CartCtx from "../store/cartCtx";
import MenuItem from "./MenuItem";
import { Table } from "react-bootstrap";

const Menu = () => {
    const cartCtx = useContext(CartCtx);

    const MenuItems = cartCtx.menuItmes.map((item) => <MenuItem item={item}>
    </MenuItem>)

    return (
        <Table striped>
            {MenuItems}
        </Table>
    )

}

export default Menu;