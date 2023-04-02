import React from 'react';
import '../../App.css';
import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className='menu'>

            <div className='pages' id='prod'>
                <Link to="/products">
                 <button className='menuPages'>PRODUCTS</button>
                </Link>
           </div>
            <div className='pages' id='don'>
                <Link to="/donations">
                    <button className='menuPages'>DONATIONS</button>
                </Link>
            </div>
            <div className='pages' id='stor'>
                <Link to="/about">
                    <button className='menuPages'>OUR STORY</button>
                </Link>
            </div>
            <div className='pages' id='cont'>
                <Link to="/help">
                    <button className='menuPages'>CONTACT US</button>
                </Link>
            </div>
        
        </div>
    )
};