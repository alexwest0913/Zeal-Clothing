import React, { useState } from 'react';
import './App.css';
import Shirt from './Shirt';
import Cart from './Cart';
import Nav from './Nav';
import Lookbook from './Lookbook';
import Footer from './Footer';
import data from './data';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';


function App() {
  const [cart, setCart] = useState([]);
  const {products} = data;
  const onAdd = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCart([...cart, {...product, qty: 1}]);
    }
  }
  return (
    <>
    <Router>
      <Nav />
      <Routes>
      <Route exact path='/Lookbook' element={<Lookbook/>} />
      <Route path='/Shirt' cart={cart} onAdd={onAdd} products={products} element={<Shirt/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Cart' onAdd={onAdd} cart={cart} element={<Cart/>} />
      <Route path='/About' element={<About/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
