import { ReactNode, useReducer } from "react";

import { Cart } from "../Interfaces/Cart.interface";
import { CartState } from "../models/reducers/cart/cart-state.model";
import { Item } from "../models/item.model";
import CartContext from "./cart-context";
import { CartAction } from "../models/reducers/cart/cart-action.model";
import { CartActionEnum } from "../models/reducers/cart/cart-action.enum";

const defaultCartState = new CartState([], 0);

const cartReducer = (state: CartState, action: CartAction): CartState => {

    if (action.type === CartActionEnum.ADD_ITEM) {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return new CartState(updatedItems, updatedTotalAmount);
    }


    return defaultCartState;
};

interface Props {
    children: ReactNode;
}

export default function CartContextProvider(props: Props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: Item) => {
        dispatchCartAction(new CartAction(CartActionEnum.ADD_ITEM, item))
    };

    const removeItemFromCartHandler = (item: Item) => {
        dispatchCartAction(new CartAction(CartActionEnum.REMOVE_ITEM, item))
    }

    const cartContext: Cart = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler 
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}