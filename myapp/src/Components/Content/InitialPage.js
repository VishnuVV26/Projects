import React from 'react'
import natureImage from './Images/nature1.jpg'
import './initialpage.css'
import Home from './Home'
const InitialPage = () => {
  return (
    <div className='initial-page'>
      <div className='building-img'>
        <img
          src={natureImage}
          alt='eagle icon'
          style={{ width: '800px', height: '600px' }}
        />
      </div>
      <div className='heading-p'>
        <h1>
          WELCOME TO EAGLE
        </h1>

      </div>

    </div>
  )
}

export default InitialPage