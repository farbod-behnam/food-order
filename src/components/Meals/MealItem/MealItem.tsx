import { Meal } from "../../../models/meal";

import classes from "./MealItem.module.css";

interface Props {
    meal: Meal;
}

export default function MealItem(props: Props) {

    const price: string = "$" + props.meal.price.toFixed(2);

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>

            </div>
        </li>
    );
}