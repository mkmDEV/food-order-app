import classes from './Header.module.scss';
import { HeaderCartButton } from '@layout';

import mealsImage from '@assets/meals.jpg';
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious meals" />
      </div>
    </>
  );
};
export default Header;
