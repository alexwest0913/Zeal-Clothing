import React from 'react';
import './App.css';

function Cart(props) {
  const { cart, onAdd } = props;
  return (
    <>
      <h1 className='c-heading'>Cart</h1>
      <div className='c-total'>
        {cart.length === 0 && <div>Cart is Empty</div>}
      </div>
    </>
  );
}

export default Cart
