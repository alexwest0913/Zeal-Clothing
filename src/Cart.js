import React from 'react';
import './App.css';

function Cart(props) {
  const { cart, onAdd } = props;
  return (
    <>
      <div className='c-main'>
        <h1 className='c-heading'>Cart</h1>
        <div className='c-total'>
          {cart.length === 0 && <div>Cart is Empty</div>}
        </div>
        {cart.length > 0 &&
          <ul className='c-ul'>
            <li className='c-li'>Item</li>
            <li className='c-li'>Name</li>
            <li className='c-li'>Quantity</li>
          </ul>
        }
        {cart.map((item) => (
          <div className='c-item' key={item.id}>
            <img className='c-img' src={item.img} alt={item.name}/>
            <div className='c-name'>{item.name}</div>
            <div>{item.qty}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart
