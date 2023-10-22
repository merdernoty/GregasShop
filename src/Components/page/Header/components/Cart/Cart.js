import React, { useState } from 'react';
import './Cart.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems([...items, product]);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  // Обработчик события для клика по корзине
  const handleCartClick = () => {
  };

  return (
    <div className='WrapperCart'>
      <div className="cart" onClick={handleCartClick}>
      <Link to="cartpage"><FaShoppingCart className="cart-icon" /></Link>

        
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} руб.
            </li>
          ))}
        </ul>
        <p> {calculateTotal()} руб.</p>
      </div>
    </div>
  );
};

export default Cart;
