import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {

    const navigate = useNavigate();

    const handelServiceDetails = id => {
        navigate(`/service/${id}`)
    }

    const { _id, name, price, img, description } = service;
    return (
        <div className='service-container'>

            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <button onClick={() => handelServiceDetails(_id)} className='rounded-bottom'>book: {name}</button>
        </div>
    );
};

export default Service;