import React from 'react'
import eagleImage from './Images/Eagle2.jpg'
import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from '../Content/Login';
import Signin from '../Content/Signin';
import Home from '../Content/Home';
const Header = () => {


  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };
  const openSignupPopup = () => {
    setIsSignupPopupOpen(true);
  }
  const closeSignupPopup = () => {
    setIsSignupPopupOpen(false);
  }

  return (
    <div className='Header'>
      <div className='header-content'>

        <img
          src={eagleImage}
          alt='eagle icon'
          style={{ width: '60px', height: '60px' }}
          className='image'
        />
        <h1 className='heading'>EAGLE</h1>

        <div className='header-sec'>
          <Link to='/home'>Home &nbsp;&nbsp;</Link>
          <Link to='/about' >About &nbsp;&nbsp;</Link>
          <Link to='/contact' >Contact us&nbsp;&nbsp; </Link>
          <button className='btn-name' onClick={openLoginPopup}>Login</button>
          <button className='signin-btn' onClick={openSignupPopup}>Sign Up</button>

          {isSignupPopupOpen && (
            <div className='signup-popup-overlay'>
              <div className='signup-popup'>
                <button className='close-button' onClick={closeSignupPopup}>
                  Close
                </button>
                <Signin closePopup={closeSignupPopup} />
              </div>
            </div>
          )}

          {isLoginPopupOpen && (
            <div className='login-popup-overlay'>
              <div className='login-popup'>
                <button className='close-button' onClick={closeLoginPopup}>
                  Close
                </button>
                <Login onclose={closeLoginPopup} />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>

  )
}

export default Header