import React, { useRef } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SociaLogin/SocialLogin';

const Login = () => {
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handelNavigateToRegister = () => {
        navigate('/register')
    }
    if (user) {
        navigate('/home')
    }

    if (error) {
        errorElement = <p>{error.message}</p>

    }
    const handleLogIn = event => {
        event.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)

    }

    return (
        <Form onSubmit={handleLogIn} className='w-50 border m-4 p-4 rounded mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Text className="text-muted">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            {errorElement}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <p>New to Deluxe car service? <span className='sign-up-btn' onClick={handelNavigateToRegister}>Register please</span></p>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
            <SocialLogin></SocialLogin>
        </Form >
    );
};

export default Login;