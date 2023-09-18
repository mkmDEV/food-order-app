import classes from './MealItem.module.scss';
import { MealItemForm } from '@meals';
import { useContext } from 'react';
import CartContext from '@store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const handleAddToCart = (amount) => {
    const { id, price, name } = props;

    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <article>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </article>
      <div>
        <MealItemForm id={props.id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
