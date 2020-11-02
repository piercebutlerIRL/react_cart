import React from 'react';
import './Cart.css';

function CartItem({ id, name, price, qty, updateQty }) {
  const addItem = () => updateQty(id, qty + 1);
  const removeItem = () => updateQty(id, qty - 1);
  return (
    <div className='cart__item'>
      <div className='cart__item__name fw-b'>{name}</div>
      <div className='cart__item__price'>€{price}</div>
      <div className='cart__item__qty'>
        <button
          className='cart__item__btn lh-15'
          onClick={removeItem}
          disabled={qty <= 0}
        >
          -
        </button>
        <span className='cart__item__qty-num'>{qty}</span>
        <button className='cart__item__btn' onClick={addItem}>
          +
        </button>
      </div>
      <div className='cart__item__total'>
        <span className='fw-b'>€{(qty * price).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartItem;
