import { ReactNode, useReducer } from "react";

import { Cart } from "../Interfaces/Cart.interface";
import { CartState } from "../models/reducers/cart/cart-state.model";
import { Item } from "../models/item.model";
import CartContext from "./cart-context";
import { CartAction } from "../models/reducers/cart/cart-action.model";
import { CartActionEnum } from "../models/reducers/cart/cart-action.enum";

const defaultCartState = new CartState([], 0);

const cartReducer = (state: CartState, action: CartAction): CartState => {


    if (action.item !== undefined && action.type === CartActionEnum.ADD_ITEM) {
        const updatedTotalAmount = state.totalAmount + action.item.meal.price * action.item.amount;

        let existingCartItemIndex = state.items.findIndex(item => action.item && item.meal.id === action.item.meal.id);
        let existingCartItem = state.items[existingCartItemIndex];

        let updatedItems: Item[] = [];

        if (existingCartItem) {
            let updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };
            updatedItems = [ ...state.items ];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return new CartState(updatedItems, updatedTotalAmount);
    }
    
    if (action.item !== undefined && action.type === CartActionEnum.REMOVE_ITEM) {

        let existingCartItemIndex = state.items.findIndex(item => action.item && item.meal.id === action.item.meal.id);
        let existingItem = state.items[existingCartItemIndex];


        let updatedTotalAmount = state.totalAmount - existingItem.meal.price;
        let updatedItems: Item[] = [];

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => action.item && item.meal.id !== action.item.meal.id);
        }
        else {
            let updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [ ...state.items ];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return new CartState(updatedItems, updatedTotalAmount);
    }

    if (action.type === CartActionEnum.CLEAR) {
        return defaultCartState;
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

    const clearCarthandler = () => {
        dispatchCartAction(new CartAction(CartActionEnum.CLEAR, undefined))
    }

    const cartContext: Cart = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCarthandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}