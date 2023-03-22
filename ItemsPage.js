import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../components/Item";
import Menu from "../components/Menu";
import classes from "./ItemsPage.module.css"

const items = [{ id: 1, name: "Chocolate 1", price: 10, description: "Great Chocolate 1" },
{ id: 2, name: "Chocolate 2", price: 20, description: "Great Chocolate 2" },
{ id: 3, name: "Chocolate 3", price: 30, description: "Great Chocolate 3" },
]
const Items = () => {

    const itemsList = items.map((item) => <Item key={item.id} id={item.id} item={item} ></Item>);


    return (
        <Container>
            <Container className={classes["available-items"]}>
                <Row className={classes.mainrow}>
                    <Col>Item Name</Col>
                    <Col>Price</Col>
                    <Col>Description</Col>
                    <Col>Click the button to Add!</Col>
                </Row>

                {itemsList}
            </Container >
            <Menu></Menu>

        </Container>

    );


}

export default Items;