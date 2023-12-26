import React, { useState } from 'react'
import './signin.css'
import { Link, useNavigate } from 'react-router-dom';
const Signin = ({ closePopup }) => {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const [mobile, setMobile] = useState([]);
    const navigate = useNavigate();
    const handleNameChage = (e) => {
        setName(e.target.value);
    }
    const handleemailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasschange = (e) => {
        setPass(e.target.value);
    }
    const handleMobChange = (e) => {
        setMobile(e.target.value);
    }
    const handleSubmit = () => {
        closePopup();
        navigate('/home');
        console.log(name);
        console.log(email);
        console.log(pass);
        console.log(mobile);

    }

    return (
        <div className='sign-page'>
            <div className='sign-container'>
                <h1>EAGLE</h1>
                <div className='signup-details'>
                    <label>Name</label>
                    <input type='text' placeholder='name' value={name} onChange={handleNameChage} required /><br />
                    <label>Email</label>
                    <input type='text' placeholder='Email' value={email} onChange={handleemailChange} required /><br />
                    <label>Password</label>
                    <input type='password' placeholder='password' value={pass} onChange={handlePasschange} required /><br />
                    <label>Mobile</label>
                    <input type='number' placeholder='phone number' value={mobile} onChange={handleMobChange} required /><br />
                    <Link to='/home'><button className='signup-btn' type='submit' onClick={handleSubmit}>Register</button></Link>

                </div>
            </div>

        </div>
    )
}

export default Signin