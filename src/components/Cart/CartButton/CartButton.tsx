import { ComponentPropsWithoutRef, useContext } from "react";
import CartContext from "../../../context/cart-context";
import CartIcon from "../CartIcon/CartIcon";
import classes from "./CartButton.module.css";

interface Props extends ComponentPropsWithoutRef<"button"> {

}

export default function CartButton(props: Props) {

    const cartContext = useContext(CartContext);

     const itemList = cartContext.items;
    //  let numberOfCartItems: number = 0;

    //  for (let item of itemList) {
    //     numberOfCartItems += item.amount;
    //  }

    let numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}