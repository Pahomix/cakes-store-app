import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to={'/about'}>Информация о нас</Link>
        </li>
        
      </ul>
    </nav>
  );
}
