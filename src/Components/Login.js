import React, { useState } from 'react'
import './login.css'
const Login = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
// For clear the Fields after Register
const clearForm=()=>{
    setEmail("");
    setPassword("");
}
    const handleSubmit=(e)=>
{
    e.preventDefault();
// Required Fields validation
    if(!email||!password)
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
setError("Password must be one capital letter");
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
    alert("Login Successfully")
    clearForm();
    setError('');
}


  return (
    <div className='page-container'>
    <div className='login-container'>
      <h2 style={{ marginTop: '20px' }}>LOGIN</h2>
      <form onSubmit={handleSubmit} >
        <div className='login-page'>
<label>
    Email:
</label>
<input className='inputarea1' type='text' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
<label>
    Password:
</label>
<input className='inputarea1' type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
{error && <p className='error'>{error}</p>}

        </div>
        <button className='lgn-btn' type='submit'>Login</button>
      </form>
</div>

    </div>
  )
}

export default Login