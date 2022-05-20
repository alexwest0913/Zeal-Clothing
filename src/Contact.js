import './Contact.css';
import React, { useState } from 'react';
import data from './data';
import ShopShirt from './ShopShirt';
import { useCart } from 'react-use-cart';
import './cart.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Shop from './Shop';
import { useAlert } from 'react-alert'

const Contact = () => {

  const alert = '';

  return (
    <>
      <h1 className='contact-head'>Contact</h1>
      <div className='contact-div'>
        <form className='form-div'>
          <div className='names'>
            <label className='fname'>First Name:<br></br>
              <input type='text' className='name-input' placeholder='Firstname' required/><br></br>
            </label><br></br>
            <label className='lname'>Last Name:<br></br>
              <input type='text' className='name-input' placeholder='Lastname' required/>
            </label>
          </div>
          <div className='email-div'>
            <label className='email'>Email:<br></br>
            <input className='e-input' type='text' placeholder='Email' required/>
            </label>
          </div>
          <div className='sub-div'>
            <label className='subject'>Subject:<br></br>
              <input type='text' className='sub-input' placeholder='Subject' required/>
            </label>
          </div>
          <div className='mess-div'>
            <label className='message'>Message:<br></br>
              <textarea type='text' className='mess-input' placeholder='Leave us a message!' required/>
            </label><br></br>
            <button type='submit' onClick={() => alert('submitted!')} className='mess-btn'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact
