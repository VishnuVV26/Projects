import React from 'react'
import './Footer.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='footer' >
            <div className='support'>
                <h2>Support</h2>
                <ul class='list pl0'>
                    <Link to='/help'>Help</Link><br />
                    <Link to='/advisories'>Advisories</Link><br />
                    <Link to='/status'>Status</Link><br />
                    <Link to='/contact'>Contact</Link><br />



                </ul>
            </div>
            <div className='company'>
                <h2>Comapany</h2>
                <ul className='list' >

                    <Link to='/about'>About us</Link> <br />
                    <Link to='/terms'>Terms and Policy</Link>
                </ul>
            </div>

            <div className='social'>
                <h2>Social</h2>
                <ul className='list' >
                    <Link to='/linkedin'>LinkedIn</Link><br />
                    <a href='https://www.youtube.com/'>Youtube</a><br />
                    <Link to='/blog'>blog</Link>
                </ul>
            </div>
            <div className='copyright'>
                <p>
                   copyright &copy; {currentYear} Eagle
                </p>
            </div>
        </div>
    )
}

export default Footer