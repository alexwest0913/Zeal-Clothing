import React from 'react';
import Header from './Header';
import data from './data';
import './App.css'

const Lookbook = (props) => {
  const {products, onAdd} = data;
  return (
    <>
      <Header />
      <div className="lookbook">
        {products.map((product, id) => (
          <div className="products" key={id}>
            <img src={product.img}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Lookbook
