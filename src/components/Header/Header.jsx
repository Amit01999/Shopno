import React from 'react';
import logo from '../../images/Logo1.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="mg">
        <img src={logo} alt="" />
      </div>
      <nav>
        <a href="/shope">Shope</a>
        <a href="/review">Oder Review</a>
        <a href="/manage">Manage Inventory </a>
      </nav>
    </div>
  );
};

export default Header;
