import { FormEvent } from "react";
import useInput from "../../hooks/use-input";
import { Address } from "../../models/address.model";
import classes from "./Checkout.module.css";

const isNotEmpty = (value: string) => {
    return value.trim() !== "";
}

const isFiveChars = (value: string) => {
    return value.trim().length === 5 && isNotEmpty(value);
}

interface Props {
    onCancel: () => void;
    onSubmit: (address: Address) => void;
}

export default function Checkout(props: Props) {

    const [nameValue, nameIsValid, nameInputHasError, nameChangeHandler, nameBlurHandler, resetNameInput] = useInput(isNotEmpty);
    const [streetValue, streetIsValid, streetInputHasError, streetChangeHandler, streetBlurHandler, resetStreetInput] = useInput(isNotEmpty);
    const [postalCodeValue, postalCodeIsValid, postalCodeInputHasError, postalCodeChangeHandler, postalCodeBlurHandler, resetPostalCodeInput] = useInput(isFiveChars);
    const [cityValue, cityIsValid, cityInputHasError, cityChangeHandler, cityBlurHandler, resetCityInput] = useInput(isNotEmpty);

    let formIsValid = false;

    if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
        formIsValid = true;
    }


    const confirmHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(nameValue);
        console.log(streetValue);
        console.log(postalCodeValue);
        console.log(cityValue);

        props.onSubmit({
            name: nameValue,
            street: streetValue,
            postalCode: postalCodeValue,
            city: cityValue
        })

        resetNameInput();
        resetStreetInput();
        resetPostalCodeInput();
        resetCityInput();

    }

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameInputHasError ? classes.control + " " + classes.invalid : classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={nameValue}
                />
                {nameInputHasError && <p className={classes.invalid}>Name must not be empty</p>}
            </div>
            <div className={streetInputHasError ? classes.control + " " + classes.invalid : classes.control}>
                <label htmlFor='street'>Street</label>
                <input
                    type='text'
                    id='street'
                    onChange={streetChangeHandler}
                    onBlur={streetBlurHandler}
                    value={streetValue}
                />
                {streetInputHasError && <p className={classes.invalid}>Street must not be empty</p>}
            </div>
            <div className={postalCodeInputHasError ? classes.control + " " + classes.invalid : classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input
                    type='text'
                    id='postal'
                    onChange={postalCodeChangeHandler}
                    onBlur={postalCodeBlurHandler}
                    value={postalCodeValue}
                />
                {postalCodeInputHasError && <p className={classes.invalid}>Postal code must be 5 character</p>}
            </div>
            <div className={cityInputHasError ? classes.control + " " + classes.invalid : classes.control}>
                <label htmlFor='city'>City</label>
                <input
                    type='text'
                    id='city'
                    onChange={cityChangeHandler}
                    onBlur={cityBlurHandler}
                    value={cityValue}
                />
                {cityInputHasError && <p className={classes.invalid}>City must not be empty</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button disabled={!formIsValid} className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}
