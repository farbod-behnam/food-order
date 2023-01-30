
import { Item } from "../../models/item.model";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

    const CART_ITEMS: Item[] = [
        new Item("c1", "Sushi", 2, 12.99),
    ];

interface Props {
    onClose: () => void;
}

export default function Cart(props: Props) {

    const cartItems = CART_ITEMS.map(item => <li>{item.name}</li>)

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes["cart-items"]}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}