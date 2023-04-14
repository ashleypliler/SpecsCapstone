import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Footer from '../Footer'




const Login = () => {
    
    

    return (
        <main>
            <form className='form auth-form' >
                <input 
                    type='text' 
                    placeholder='username' 
                 
                    className='form-input'/>
                <input 
                    type='password' 
                    placeholder='password' 
                   
                    className='form-input'/>
                <button className='form-btn' type='submit'>
                  Login
                </button>
            </form>
            
            <Link to='/register' className='form-btn' >
                Need to register?
            </Link>
            <div className='footerLogin'>
                <Footer/>
            </div>
        </main>
    )
}

export default Login