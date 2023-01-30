
import React, { LegacyRef } from "react";
import { InputModel } from "../../../models/input.model";
import classes from "./Input.module.css";

interface Props {
    label: string;
    input: InputModel;
}

// export default function Input = (props: Props) {
const Input = React.forwardRef((props: Props, ref: LegacyRef<HTMLInputElement> | undefined) => {

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;