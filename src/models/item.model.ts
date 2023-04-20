import { Meal } from "./meal.model";

export class Item {

    id: number | undefined;
    meal: Meal;
    amount: number;

    constructor(id: number | undefined,  meal: Meal, amount: number) {
        this.id = id;
        this.meal = meal;
        this.amount = amount;
    }
}