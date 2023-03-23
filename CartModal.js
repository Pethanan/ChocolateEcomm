import React from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.css"

const Backdrop = (props) => {
    return (
        <div onClick={props.closeCartHandler} className={classes.backdrop}>
        </div>
    )
}

const CartModalOverLay = (props) => {

    return (<div closeCartHandler={props.closeCartHandler} className={classes.modal}>

        <div>{props.children}</div>
    </div>)

}

const CartModal = (props) => {

    const element = document.getElementById("cart-overlay");

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<CartModalOverLay closeCartHandler={props.closeCartHandler}>{props.children}</CartModalOverLay>, element)}
            {ReactDOM.createPortal(<Backdrop closeHandler={props.closeCartHandler}></Backdrop>, element)}
        </React.Fragment>
    )
}

export default CartModal;