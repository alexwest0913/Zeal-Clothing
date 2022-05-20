import React, { useState, useEffect } from 'react';
import data from './data';
import ShopShirt from './ShopShirt';
import { useCart } from 'react-use-cart';
import './cart.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Shop from './Shop';
import { useAlert } from 'react-alert'

const Cart = () => {
  const {addItem} = useCart();
  const alert = useAlert();

  const shipping = 5;

  const {
    items,
    isEmpty,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
    cartTotal,
    totalItems,
    emptyCart,
   } = useCart();

   if (isEmpty) return <p className='empty'>Your cart is empty</p>;

  return (
    <>
    <h1 className='cart-head'>Cart Items</h1>
      <div className='cart'>
        <div className='table-div'>
        <table>
          <tbody>
            {items.map((item, id) => {
              return(
              <tr className='tr' key={id}>
                <td className='td'>
                  <img className='cart-img' src={item.img} />
                </td>
                <tr>
                <td className='td-title'>{item.title}</td>
                </tr>
                <tr>
                <td className='td-price'>${item.price}</td>
                </tr>
                <tr>
                <td className='tr-quan'>
                  <button className='cart-btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <input type='text' value={item.quantity}/>
                  <button className='cart-btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </td>
                </tr>
                <td className='td-quan'>
                  <button className='cart-btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <input type='text' value={item.quantity}/>
                  <button className='cart-btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </td>
                <td className='td-remove'>
                  <button className='cart-btn-rm' onClick={() => removeItem(item.id)}>Remove Item</button>
                </td>
                <td>
                  <button className='cart-btn-x' onClick={() => removeItem(item.id)}>X</button>
                </td>
              </tr>
            )
            })}
          </tbody>
        </table>
        <h3 className='sub-total'>Subtotal: ${cartTotal}</h3>
        </div>
        <div className='summary'>
          <div className='sum-div'>
            <h1 className='sum-head'>Summary</h1>
            <div className='sum-items'>
              <h5>Items {totalItems}</h5>
              <h5>${cartTotal}</h5>
            </div>
            <div className='sum-ship'>
            <h4>Shipping</h4>
              <select name='shipping' id='ship'>
                <option value='standard'>Standard Delivery - $5</option>
                <option value='express'>Express Delivery - NA</option>
                <option value='2-Day'>2 Day Delivery - NA</option>
              </select>
            </div>
            <div className='code-div'>
            <h4>Promo Code</h4>
              <form>
                <input type='text' placeholder='Enter Promo Code' id='input-code' name='code'/>
              </form>
            </div>
            <div className='price-div'>
              <h5>Total Price</h5>
              <h5>${cartTotal + shipping}</h5>
            </div>
            <div className='btn-div'>
            <button type='submit' onClick={() => {alert.show('Oops! Something went wrong...')}} className='checkout-btn'>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
