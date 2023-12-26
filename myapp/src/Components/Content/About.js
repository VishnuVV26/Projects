import React from 'react'
import eagleImage from './Images/Eagle2.jpg'
import './about.css'
const About = () => {
  return (
    <div className='about'>
      <div className='img2'>
        <img
          src={eagleImage}
          alt='eagle icon'
          style={{ width: '400px', height: '500px' }}
        />
      </div>
      <div className='abt-page'>
        <h1 >About Us</h1>
      </div>
      <div className='abt-content'>
        <div className='vision'>
          <h2 className='abt-head'>Our Vision</h2>
          <p>
            “To be a globally respected corporation that provides best-of-breed business solutions, leveraging technology, delivered by best-in-class people”
          </p>
        </div>
        <div className='mission'>
          <h2 className='abt-head' >Our Mission</h2>
          <p>
            “To achieve our objectives in an environment of fairness, honesty, and courtesy towards our clients, employees, vendors and society at large“
          </p>
        </div>
        <div className='values'>
          <h2 className='abt-head'>
            Our Values
          </h2>
          <ul>
            <li>Uncompromising integrity & flawless execution of commitments</li>
            <li>Edge in performance & envisioning technology leadership</li>
            <li>Shared vision among team members & teaming as a way of life</li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default About