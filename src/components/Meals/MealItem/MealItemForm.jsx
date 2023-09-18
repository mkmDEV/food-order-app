import { useRef, useState } from 'react';

import classes from './MealItemForm.module.scss';
import { Input } from '@ui';

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    if (
      enteredAmount.trim().lenght === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label={'Amount'}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
