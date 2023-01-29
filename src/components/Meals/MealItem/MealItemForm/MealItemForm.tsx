
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

interface Props {
    id: string;
}

export default function MealItemForm(props: Props) {
    

    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: "amount_" + props.id,
                type: "text",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }}></Input>
            <button>+ Add</button>
        </form>
    );
}