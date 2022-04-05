import React, { useState } from 'react';
import './App.css';
import data from './data'


function Shirt(props) {
  const {onAdd, cart} = props
  const {products} = data;
  return (
    <>
      <h1 className='s-head'>Shop</h1>
      <div className="products">
        {products.map((product, id) => (
          <div className="product" key={id}>
            <div className="name">
              <h3>{product.title}</h3>
            </div>
            <div className='info'>
            <img src={product.img} alt={product.title} />
            <h4 className='price'>${product.price}</h4>
            <button onClick={()=> onAdd(product)}>
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shirt
