import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const { serviceId } = useParams();

    return (
        <div>
            <h2>this is service detail: {serviceId}</h2>
            <div className=' text-center'>
                <Link to={'/cheakout'}>
                    <button className='btn btn-dark hover:bg-info '>Procced Chekout</button>

                </Link>
            </div>
        </div >
    );
};

export default ServiceDetails;