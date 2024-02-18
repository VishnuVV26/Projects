import React from 'react'
import Image from './Images/Vijay4.jpg';
import './home.css'
const Home = () => {
  return (
    <div>
      {/* Home page Image-Vijay4 */}
        <div className='image1'>
<img
          src={Image}
          alt='vijay 2'
          style={{ width: '100%', height: '600px' }}
          />
    </div>
    <div className='home-content'>
        <h1>
        தமிழக வெற்றி கழகம்
        </h1>

    </div>
    </div>
  )
}

export default Home