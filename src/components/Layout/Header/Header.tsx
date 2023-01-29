import { Fragment } from "react";

import mealsImage from "../../../assets/meals.jpg";
import CartButton from "../../Cart/CartButton/CartButton";
import classes from "./Header.module.css";

export default function Header() {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
}