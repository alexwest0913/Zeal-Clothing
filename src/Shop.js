import React, { useState } from 'react';
import './App.css';
import data from './data'
import ShopShirt from './ShopShirt';
import Cart from './Cart'

const Shop = (props) => {
  return (
    <>
      <h1 className='s-head'>Shop</h1>
      <div className="products">
        {data.products.map((item, id) => (
          <ShopShirt
            img={item.img}
            title={item.title}
            item={item}
            alert={alert}
            price={item.price}
            key={id}
            />
        ))}
      </div>
    </>
  );
}

export default Shop;
