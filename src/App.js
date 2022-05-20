import React, { useState } from 'react';
import './App.css';
import Shop from './Shop';
import Cart from './Cart';
import Nav from './Nav';
import Lookbook from './Lookbook';
import Footer from './Footer';
import data from './data';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';
import { useAlert } from 'react-alert'


function App() {

  const alert = useAlert();

  return (
    <>
    <CartProvider>
    <Router>
      <Nav />
      <Routes>
      <Route exact path='/' element={<Lookbook/>} />
      <Route path='/Lookbook' element={<Lookbook/>}/>
      <Route path='/Shop' element={<Shop/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/About' element={<About/>} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
    </>
  );
}

export default App;
