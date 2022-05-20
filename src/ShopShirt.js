import React, { useState } from 'react';
import data from './data';
import Shop from './Shop';
import Cart from './Cart';
import { useCart } from 'react-use-cart';
import { useAlert } from 'react-alert'

const ShopShirt = (props) => {
  const alert = useAlert();
  const { addItem } = useCart([])
  const initialState = "Add to Cart";
  const [buttonText, setButtonText] = useState(initialState)

  return (
    <div className='lookbook'>
        <div className='product'>
          <h3 className='name'>{props.title}</h3>
          <img src={props.img} alt={props.title}/>
          <div className='info'>
            <div className='sz-btns'>
            </div>
            <h4 className='price'>${props.price}</h4>
            <button className='btn' onClick={() => {addItem(props.item); setButtonText("Added to Cart"); alert.show('Added to Cart') }}>
              {buttonText}
            </button>
          </div>
        </div>
    </div>
  )
}

export default ShopShirt;
