import React, { useEffect, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


import Home from './Home'

const Login = ({ onclose }) => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    onclose();
    navigate('/home');
    console.log('Email:', email);
    console.log('Password:', password);
  };


  return (
    <div className='loginpage'>
      <div className='login-container'>
        <h1>EAGLE</h1>
        <div className='login-details'>
          <label>Email Address</label>
          <input type='text' placeholder='Email' className='email' value={email} onChange={handleEmailChange} /><br />
          <label>Password</label>
          <input type='password' placeholder='password' className='password' value={password} onChange={handlePasswordChange} /><br />
          <div className='btn'>
            <Link to='/home'><button onClick={handleSubmit}>Submit</button></Link></div>
        </div>


      </div>
    </div>

  )
}

export default Login