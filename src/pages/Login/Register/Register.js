import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css'
import SocialLogin from '../SociaLogin/SocialLogin';
const Register = () => {

    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handelNavigateToLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home');
    }
    const handelRegister = event => {
        event.preventDefault()
        const password = event.target.password.value;
        const email = event.target.email.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='resgister-main-container pb-4'>
            <h1 className='register-title'>Register Please</h1>
            <form onSubmit={handelRegister} className='register-container'>
                <input className='px-2' type="text" name="name" placeholder='Your name' id="1" required />
                <input className='px-2' type="email" name="email" placeholder='Your email' id="2" required />
                <input className='px-2' type="password" name="password" placeholder='Your password' id="22" required />
                <p>Already have an account? <small className='sign-up-btn' onClick={handelNavigateToLogin}>Login </small></p>
                <input className='register-btn' type="submit" value="Register" />
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;