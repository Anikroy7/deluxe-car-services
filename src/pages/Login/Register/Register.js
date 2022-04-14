import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {

    const navigate = useNavigate()


    const handelNavigateToLogin = () => {

        navigate('/login')
    }

    const handelRegister = event => {
        event.preventDefault()
    }
    return (
        <div className='resgister-main-container'>
            <h1 className='register-title'>Register Please</h1>
            <form onSubmit={handelRegister} className='register-container'>
                <input className='px-2' type="text" name="name" placeholder='Your name' id="" />
                <input className='px-2' type="email" name="email" placeholder='Your email' id="" />
                <input className='px-2' type="password" name="password" placeholder='Your password' id="" />
                <p>Already have an account? <small className='sign-up-btn' onClick={handelNavigateToLogin}>Login </small></p>
                <input className='register-btn' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;