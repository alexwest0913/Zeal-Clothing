import React, { useState } from 'react';
import './App.css'


function Shirt({ setCart, cart }) {
  const [products] = useState([
    {
      id: 1,
      title: 'Pink Summer Tee',
      img: 'pink tee copy 2.png',
      price: '48'
    },
    {
      id: 1,
      title: 'Black Summer Tee',
      img: 'black tee copy 2.png',
      price: '48'
    },
    {
      id: 1,
      title: 'Green Summer Tee',
      img: 'green tee copy.png',
      price: '48'
    },
    {
      id: 1,
      title: 'White Summer Tee',
      img: 'white tee copy 2.png',
      price: '48'
    },
    {
      id: 1,
      title: 'Grey Summer Tee',
      img: 'grey tee copy 2.png',
      price: '48'
    },
    {
      id: 1,
      title: 'Summer Box Logo Tee',
      img: 'box logo tee copy.png',
      price: '58'
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <>
      <h1 className='s-head'>Products</h1>
      <div className="products">
        {products.map((product, id) => (
          <div className="product" key={id}>
            <div className="name">
              <h3>{product.title}</h3>
            </div>
            <div className='info'>
            <img src={product.img} alt={product.title} />
            <h4 className='price'>${product.price}</h4>
            <button onClick={() => addToCart(product)}>
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
