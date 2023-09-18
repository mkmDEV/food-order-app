import { Card } from '@ui';
import { MealItem } from '@components/Meals';

import classes from './AvailableMeals.module.scss';

import DUMMY_MEALS from './dummy-meals.json';

const AvailableMeals = () => {
  const mealsList = (meals) =>
    meals.map((meal) => <MealItem key={meal.id} {...meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList(DUMMY_MEALS)}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
