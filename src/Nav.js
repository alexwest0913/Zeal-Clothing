import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import './App.css'
import { useCart } from 'react-use-cart'
import Cart from './Cart';

class Nav extends Component {
  state = {clicked: false}

  cancelNav = () => {
    this.setState({clicked: !"nav-links-active"})
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render(props) {
  return (
    <nav className = 'nav'>
      <h1 className = 'nav-logo'><Link to={'./Lookbook'}>Zeal</Link></h1>
      <div className='menu-icon' onClick={this.clickHandler}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className ={this.state.clicked ? 'nav-links-active' : 'nav-links'}>
        <li className='link' onClick={this.cancelNav}><Link to={'./Lookbook'}>LOOKBOOK</Link></li>
        <li className='link' onClick={this.cancelNav}><Link to={'./Shop'}>SHOP</Link></li>
        <li className='link' onClick={this.cancelNav}><Link to={'./About'}>ABOUT</Link></li>
        <li className='link' onClick={this.cancelNav}><Link to={'./Contact'}>CONTACT</Link></li>
        <Link to={'./Cart'}>
        <li className="fas fa-shopping-cart" onClick={this.cancelNav}></li>
        </Link>
      </ul>
    </nav>
  )
}
}

export default Nav;
