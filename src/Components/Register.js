import React from 'react'
import './register.css'
import { useState } from 'react';
const Register = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
const[error,setError]=useState("");
// For clear the Fields after Register
const clearForm=()=>{
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
}

const handleSubmit=(e)=>
{
// Required Fields validation
    e.preventDefault();
    if(!name||!email||!password||!phone)
    {
        setError("All fields are Required");
        return;
    }
    // Password Validation
    if(password.length>8)
    {
        setError("Password must be 8 Characters");
        return;
    }
    if(!/[A-Z]/.test(password))
    {
setError("Password must be One capital letter and one digit");
return;
    }
    if(!/[0-9]/.test(password))
    {
        setError("Password must be one number");
        return;
    }
    // Email Validation
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
    setError("Invalid Email");
    return;
    }
    alert("Register Successfully")
    clearForm();
    setError('');
}

    return(
        <div className='rpage-container'>
        <div className='registration-container'>
                  <h2 style={{ marginTop: '20px' }}>REGISTRATION</h2>
                <form onSubmit={handleSubmit}>
<div className='reg-page'>
    <label>
        Name:
    </label>
    <input className='inputarea' type='text' placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <label>
        Email:
    </label>
    <input className='inputarea' type='text' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <label>
        Password:
    </label>
    <input className='inputarea' type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <label>
        Phone:
    </label>
    <input className='inputarea' type='text' placeholder='Phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

    {error && <p className='error'>{error}</p>}

</div>

<button type='submit'>Register</button>
                </form>
      
        </div>
        </div>
  )
}

export default Register