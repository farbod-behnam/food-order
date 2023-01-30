import { ComponentPropsWithoutRef } from "react";
import CartIcon from "../CartIcon/CartIcon";
import classes from "./CartButton.module.css";

interface Props extends ComponentPropsWithoutRef<"button"> {

}

export default function CartButton(props: Props) {

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}