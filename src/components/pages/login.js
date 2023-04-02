import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div className='login'>
            <div className='loginCard'>
               <span className='loginHeader'>LOGIN</span>
               <span>
                    <input className='username' type='text' placeholder='Email'></input>
                    <input className='password' type='text' placeholder='Password'></input>
                    <input className='submit' type= 'SUBMIT'></input>
               </span>
            </div>
        </div>
    )
}; 