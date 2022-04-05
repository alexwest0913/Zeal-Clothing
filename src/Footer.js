import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="f-div">
        <h1 className="f-heading"><Link to={'./Lookbook'}>Zeal</Link></h1>
        <ul className="f-links">
          <li className="fab fa-instagram"></li>
          <li className="fab fa-facebook"></li>
          <li className="fab fa-twitter"></li>
        </ul>
        <div className="p-div">
          <p className="p">Developed and Owned by Alex West</p>
        </div>
      </div>
    </>
  )
}

export default Footer
