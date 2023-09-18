import classes from './Input.module.scss';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => (
  <div className={classes.input}>
    <label>
      {props.label}
      <input ref={ref} {...props.input} />
    </label>
  </div>
));

export default Input;
