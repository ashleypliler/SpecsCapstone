import React from 'react'
import './Cart.css';
import {Link} from 'react-router-dom';
import {BsCart3} from 'react-icons/bs'

export const Cart = () => {
    return (
        <Link to='cart'>
            <button className='btn2'><BsCart3 className='cartIcon'/></button>
        </Link>
    );
}