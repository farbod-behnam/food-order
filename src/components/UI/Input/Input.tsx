
import { InputModel } from "../../../models/input.model";
import classes from "./Input.module.css";

interface Props {
    label: string;
    input: InputModel;
}

export default function Input(props: Props) {

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
}