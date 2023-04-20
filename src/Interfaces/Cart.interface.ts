import { Item } from "../models/item.model";

export interface Cart {
    items: Item[];
    totalAmount: number;
    addItem: (item: Item) => void;
    removeItem: (item: Item) => void;
    clearCart: () => void;
}