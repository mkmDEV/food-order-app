import { useState } from 'react';

import { Cart } from '@cart';
import { Header } from '@layout';
import { Meals } from '@meals';

import CartProvider from '@store/CartProvider';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleShowCart = () => {
    setIsCartVisible(true);
  };
  const handleHideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onClose={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
