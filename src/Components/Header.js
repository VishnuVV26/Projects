import React from 'react'
import Image from './Images/Vijay.jpg'
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <div className='Header'>
      <div className='header-content'>

        <img
          src={Image}
          alt='vijay icon'
          style={{ width: '60px', height: '60px' }}
          className='image'
        />
        <h1 className='heading'>தமிழக வெற்றி கழகம்</h1>
        <div className='header-sec'>
        <Link to="/login">Login &nbsp;&nbsp; </Link>
      <Link to="/register">Register </Link>
          </div>
        </div>
        </div>
  )
}

export default Header