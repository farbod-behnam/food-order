import { Item } from "../../item.model";

export class CartState {
    items: Item[];
    totalAmount: number;

    constructor(items: Item[], totalAmount: number) {
        this.items = items;
        this.totalAmount = totalAmount;
    }
}