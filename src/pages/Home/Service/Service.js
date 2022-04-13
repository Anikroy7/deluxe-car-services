import React from 'react';
import './service.css'

const Service = ({ service }) => {

    const { name, price, img, description } = service;
    return (
        <div className='service-container'>

            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <button className='rounded-bottom'>book: {name}</button>
        </div>
    );
};

export default Service;