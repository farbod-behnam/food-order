import React from "react";
import { Cart } from "../Interfaces/Cart.interface";
import { Item } from "../models/item.model";

const CartContext = React.createContext<Cart>({
    items: [],
    totalAmount: 0,
    addItem: (item: Item) => {},
    removeItem: (item: Item) => {},
    clearCart: () => {}
});

export default CartContext;
