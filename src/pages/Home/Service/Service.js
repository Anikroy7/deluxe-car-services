import React from 'react';

const Service = ({ service }) => {

    const { name, price, img } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
        </div>
    );
};

export default Service;