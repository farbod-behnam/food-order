import { Item } from "../../item.model";
import { CartActionEnum } from "./cart-action.enum";

export class CartAction {
    type: CartActionEnum;
    item: Item | undefined;

    constructor(type: CartActionEnum, item: Item | undefined) {
        this.type = type;
        this.item = item;
    }
}