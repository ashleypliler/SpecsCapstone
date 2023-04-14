import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom';
import {CgProfile} from 'react-icons/cg'

export const Button = () => {
    return (
        <Link to='register'>
            <button className='btn'><CgProfile className='profileIcon'/></button>
        </Link>
    );
}