import React from "react";
import { useContext } from "react";
import CartContext from "../../../context/cart-context";
import { Item } from "../../../models/item.model";
import { Meal } from "../../../models/meal.model";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

interface Props {
    meal: Meal;
}

export default function MealItem(props: Props) {

    const cartContext = useContext(CartContext);

    const price: string = "$" + props.meal.price.toFixed(2);

    const addToCartHandler = (amount: number) => {
        cartContext.addItem(new Item(undefined, props.meal, amount));
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

// export default React.memo(MealItem);