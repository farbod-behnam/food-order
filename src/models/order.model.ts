import { Item } from "./item.model";
import { Address } from "./address.model";

export class Order {
    address: Address;
    orderedItems: Item[];

    constructor(address: Address, orderedItems: Item[]) {
        this.address = address;
        this.orderedItems = orderedItems;
    }
}