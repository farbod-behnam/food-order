import { useEffect } from "react";
import useAxios from "../../../hooks/use-axios";
import { Meal } from "../../../models/meal.model";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";



export default function AvailableMeals() {

    const [meals, error, isLoading, axiosSendRequest] = useAxios<Meal[]>();

    const fetchMeals = async () => {
        await axiosSendRequest({ url: "http://localhost:8080/api/meals", method: "GET", })
    }

    useEffect(() => {

        fetchMeals();

    }, []);


    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className={classes.MealsError}>
                <p>{error}</p>
            </section>
        );
    }


    const mealList = meals && meals.map(meal => <MealItem key={meal.id} meal={meal}></MealItem>);


    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    );
}