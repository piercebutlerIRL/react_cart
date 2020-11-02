import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({ initItems }) {
  const [items, setItems] = useState(initItems);

  const updateQty = (id, newQty) => {
    const newItem = items.map((item) => {
      if (item.id === id) return { ...item, qty: newQty };
      return item;
    });
    setItems(newItem);
  };

  const cartTotal = items
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className='cart__widget'>
      <h1>Shopping Cart</h1>
      {items.map((item) => {
        return <CartItem key={item.id} updateQty={updateQty} {...item} />;
      })}
      <div className='cart__total'>
        <span className='fw-l'>Total:</span> €{cartTotal}
      </div>
    </div>
  );
}

export default Cart;
