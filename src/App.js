import React, { useState } from 'react';
import './App.css';
import Shirt from './Shirt';
import Cart from './Cart';
import Nav from './Nav';
import Lookbook from './Lookbook';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';


function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
    <Router>
      <Nav />
      <Routes>
      <Route exact path='/Lookbook' element={<Lookbook/>} />
      <Route path='/Shirt' element={<Shirt/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/About' element={<About/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
