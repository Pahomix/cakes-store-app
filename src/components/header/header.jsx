import './header.css';
import React from 'react';
import Navbar from '../navbar/navbar';

export default function Header() {
  const now = new Date().toLocaleTimeString();
  return (
    <header>
        {/* <img src={logo} alt="Image not found" /> */}
        <h1>Cake Store</h1>
        <p className='role-user'>Админ</p>
    </header>
  );
}
