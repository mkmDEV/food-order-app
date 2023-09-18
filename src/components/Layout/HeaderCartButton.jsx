import { useContext, useEffect, useState } from 'react';

import classes from './HeaderCartButton.module.scss';
import { CartIcon } from '@cart';

import CartContext from '@store/cart-context.jsx';

const HeaderCartButton = (props) => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const itemsTotalAmount = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ''
  }`;

  const { items: cartItems } = cartCtx;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => setIsButtonHighlighted(false), 300);

    return () => clearTimeout(timer);
  }, [cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsTotalAmount}</span>
    </button>
  );
};
export default HeaderCartButton;
