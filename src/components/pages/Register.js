import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import Footer from '../Footer'

const RegisterClient = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4567/register`, {username, password})
            .then((res) => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                alert(err, 'couldnt register user')
                setPassword('')
                setUsername('')
            })
    }

    return (
        <main>
            <form className='form auth-form' onSubmit={registerUser}>
                <input 
                    type='text' 
                    placeholder='username' 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='form-input'/>
                <input 
                    type='password' 
                    placeholder='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='form-input'/>
                <button className='form-btn' type='submit'>
                    Register
                </button>
            </form>
            <Link to='/login'className='form-btn'>
                Already have an account? Login in here!
            </Link>
            <div className='footerLogin'>
            <Footer/>
            </div>
        </main>
    )
};

export default RegisterClient;
