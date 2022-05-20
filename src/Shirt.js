import React, { useState } from 'react';
import data from './data';
import Cart from './Cart'

const Shirt = ({cartItems, setCartItems, product}) => {
  const { products } = data;
  return (
    <div className='lookbook'>
        <div className='product'>
          <img src={product.img} alt={product.title}/>
        </div>
    </div>
  )
}

export default Shirt;
