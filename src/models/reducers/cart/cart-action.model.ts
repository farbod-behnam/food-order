import { Item } from "../../item.model";
import { CartActionEnum } from "./cart-action.enum";

export class CartAction {
    type: CartActionEnum;
    item: Item;

    constructor(type: CartActionEnum, item: Item) {
        this.type = type;
        this.item = item;
    }
}