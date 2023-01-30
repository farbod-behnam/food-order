
import { FormEvent, useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

interface Props {
    onAddToCart(enteredAmount: number): void;
    id: string;
}

export default function MealItemForm(props: Props) {

    const [amountIsValid, setAmountIsValid] = useState<boolean>(true);

    const amountInputRef = useRef<HTMLInputElement>(null);

    const isEnteredAmountValid = (enteredAmountStr: string | undefined, enteredAmount: number): boolean => {
        return (enteredAmountStr?.trim.length !== 0 || enteredAmount >= 1 || enteredAmount < 5);
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredAmountStr = amountInputRef.current?.value;

        let enteredAmount = 0;
        if (enteredAmountStr !== undefined) {
            enteredAmount = parseInt(enteredAmountStr, 10);
        }

        if (enteredAmountStr?.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmount);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "text",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }}></Input>
            <button>+ Add</button>
            {amountIsValid === false && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
}