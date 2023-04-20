
import { Item } from "../../../models/item.model";
import classes from "./CartItem.module.css";

interface Props {
    item: Item;
    onAdd: (item: Item) => void;
    onRemove: (item: Item) => void;
}

export default function CartItem(props: Props) {

    const price = "$" + props.item.meal.price.toFixed(2);

    return (
        <li className={classes['cart-item']}>
        <div>
          <h2>{props.item.meal.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.item.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={() => props.onRemove(props.item)}>−</button>
          <button onClick={() => props.onAdd(props.item)}>+</button>
        </div>
      </li>
    );
}