import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function Header() {
  return (
    <div>
        <ul className='header'>
            <Link to="/">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </ul>
    </div>
  )
}

export default Header