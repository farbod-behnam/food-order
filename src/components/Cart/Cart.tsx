
import { Fragment, useContext, useState } from "react";
import CartContext from "../../context/cart-context";
import useAxios from "../../hooks/use-axios";
import { Item } from "../../models/item.model";
import { Order } from "../../models/order.model";
import { Address } from "../../models/address.model";
import Checkout from "../Checkout/Checkout";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";


interface Props {
    onClose: () => void;
}

export default function Cart(props: Props) {
    const [isCheckout, setIsCheckout] = useState<boolean>(false);
    const [createdOrder, orderError, isLoading, axiosSendRequest] = useAxios<Order>();

    const cartContext = useContext(CartContext);

    const totalAmount = "$" + cartContext.totalAmount.toFixed(2);
    const hasItems = cartContext.items.length > 0;

    const cartItemAddHandler = (item: Item) => {
        let newItem: Item = { ...item, amount: 1 };
        cartContext.addItem(newItem);
    };

    const cartItemRemoveHandler = (item: Item) => {
        cartContext.removeItem(item);
    };

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = async (address: Address) => {


        await axiosSendRequest({
            url: "http://localhost:8080/api/orders",
            method: "POST",
            data: { address: address, orderedItems: cartContext.items }
        });

        if (!orderError)
            cartContext.clearCart();

    }

    const cartModalContent = (
        <Fragment>
            <ul className={classes["cart-items"]}>
                {cartContext.items.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        onRemove={cartItemRemoveHandler.bind(null, item)}
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />}
            {!isCheckout && <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems === true && <button onClick={orderHandler} className={classes.button}>Order</button>}
            </div>}
            {orderError && <p>{orderError}</p>}
        </Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>

    const didSubmitModalContent = (
        <Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>Close</button>
            </div>
        </Fragment>
    );


    return (
        <Modal onClose={props.onClose}>
            {!isLoading && !createdOrder && cartModalContent}
            {isLoading && isSubmittingModalContent}
            {createdOrder && didSubmitModalContent}
        </Modal>
    );
}