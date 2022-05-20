import React, { useState } from 'react';
import Header from './Header';
import Shirt from './Shirt';
import data from './data';
import './App.css'
import Cart from './Cart'

const Lookbook = ({cartItems, setCartItems, product}) => {
  const {products} = data;
  return (
    <>
      <Header />
      <div className="lookbook">
        {products.map((product) => (
          <Shirt className='products' key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems} />
        ))}
      </div>
    </>
  )
}

export default Lookbook;
