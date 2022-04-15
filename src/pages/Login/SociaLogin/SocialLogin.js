import React from 'react';
import './SocialLogin.css'
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const loadingStatus = false;
    if (loadingStatus) {
        loadingStatus = true;
    }
    let errorMassage = '';
    const navigate = useNavigate();

    if (error) {
        errorMassage = error.message;
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', backgroundColor: 'orange' }} className='w-50'></div>
                <p className='m-2 mt-1'>or</p>
                <div style={{ height: '1px', backgroundColor: 'orange' }} className='w-50 text-info'></div>
            </div>
            {loadingStatus &&
                <div className="spinner-border position-absolute bottom-50 end-50" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            <p className='text-center text-danger'>{errorMassage}</p>
            <div className='social-login-container'>
                <button onClick={() => signInWithGoogle()}>
                    <img src={google} alt="" /><span className='px-2'> Sign with google</span>
                </button>
                <button>
                    <img style={{ width: '30px', borderRadius: '5px' }} src={facebook} alt="" />
                    <span className='px-2'> Sign with facebook</span></button>
                <button><img src={github} alt="" />
                    <span className='px-2'>Sign with github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;