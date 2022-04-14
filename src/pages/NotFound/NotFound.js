import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoudImage from '../../images/404.jpg'
import Home from '../Home/Home/Home';
import './NotFound.css'
const NotFound = () => {
    const navigate = useNavigate();

    const handleHomepage = () => {

        navigate('/home')

    }

    return (
        <div>
            <p className='text-center'>
                <button onClick={handleHomepage} to={<Home></Home>} className='text-center border-0 bg-info p-1 m-2 px-3 '>← Back to home</button>
                <img style={{ width: '100%' }} className='notimage' src={NotFoudImage} alt="" />
            </p>
        </div>
    );
};

export default NotFound;