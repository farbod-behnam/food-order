import { Meal } from "../../../models/meal";
import classes from "./AvailableMeals.module.css";

    const DUMMY_MEALS: Meal[] = [
            new Meal("m1", "Sushi", "Finsest fish and veggies", 22.99),
            new Meal("m2", "Schnitzel", "A german specialty!", 16.5),
            new Meal("m3", "Barbecue Burger", "American, raw, meat", 12.99),
            new Meal("m4", "Green Bowl", "Healthy...and green...", 22.99),
        ]

export default function AvailableMeals() {

    const mealList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
    
    return (
        <section className={classes.meals}>
            <ul>
                {mealList}
            </ul>
        </section>
    );
}