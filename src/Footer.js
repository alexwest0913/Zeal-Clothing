import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="f-div">
        <h1 className="f-heading"><Link to={'./Lookbook'}>Zeal</Link></h1>
        <ul className="f-links">
          <a href='https://www.instagram.com/Zeal_Clothing.co/'>
          <li className="fab fa-instagram"></li>
          </a>
          <a href='https://www.facebook.com/zeal.clothing.company'>
          <li className="fab fa-facebook"></li>
          </a>
          <a href='https://mobile.twitter.com/ZealClothing_co'>
          <li className="fab fa-twitter"></li>
          </a>
        </ul>
        <div className="p-div">
          <p className="p">Developed and Owned by Alex West</p>
        </div>
      </div>
    </>
  )
}

export default Footer
