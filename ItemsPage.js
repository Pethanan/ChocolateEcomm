import React from "react";
import Item from "../components/Item";
import Menu from "../components/Menu";

const items = [{ id: 1, name: "Chocolate 1", price: 10, description: "Great Chocolate 1" },
{ id: 2, name: "Chocolate 2", price: 20, description: "Great Chocolate 2" },
{ id: 3, name: "Chocolate 3", price: 30, description: "Great Chocolate 3" },
]
const Items = () => {

    const itemsList = items.map((item) => <Item key={item.id} id={item.id} item={item} ></Item>);


    return (
        <>
            <table style={{ margin: "30px" }}>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Order</th>
                </tr>
                {itemsList}
            </table >
            <Menu></Menu>

        </>

    );


}

export default Items;