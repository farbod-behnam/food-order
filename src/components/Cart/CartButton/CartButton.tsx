import { ComponentPropsWithoutRef, useContext, useEffect, useState } from "react";
import CartContext from "../../../context/cart-context";
import CartIcon from "../CartIcon/CartIcon";
import classes from "./CartButton.module.css";

interface Props extends ComponentPropsWithoutRef<"button"> {

}

export default function CartButton(props: Props) {

    const [btnIsBumped, setBtnIsBumped] = useState<boolean>(false);
    const cartContext = useContext(CartContext);

    //  const itemList = cartContext.items;
    //  let numberOfCartItems: number = 0;

    //  for (let item of itemList) {
    //     numberOfCartItems += item.amount;
    //  }

    let numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    let btnClasses = classes.button;

    if (btnIsBumped) {
        btnClasses = "" + classes.button + " " + classes.bump;
    }

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return;
        }

        setBtnIsBumped(true);

        const timer = setTimeout(() => {
            setBtnIsBumped(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cartContext.items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}