
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import { Item } from "../../models/item.model";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";



interface Props {
    onClose: () => void;
}

export default function Cart(props: Props) {

    const cartContext = useContext(CartContext);

    const totalAmount = "$" + cartContext.totalAmount.toFixed(2);
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (item: Item) => {

    };

    const cartItemAddHandler = (item: Item) => {

    };


    return (
        <Modal onClose={props.onClose}>
            <ul className={classes["cart-items"]}>
                {cartContext.items.map((item) => (
                    <CartItem 
                        key={item.id} 
                        name={item.name} 
                        amount={item.amount} 
                        price={item.price} 
                        onAdd={cartItemAddHandler.bind(null, item)} 
                        onRemove={cartItemRemoveHandler.bind(null, item)} 
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems === true && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}