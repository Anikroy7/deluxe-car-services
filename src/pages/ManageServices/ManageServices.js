import React from 'react';
import useServices from '../../hook/useServices';

const ManageServices = () => {

    const [services, setServices] = useServices();
    console.log(services);
    const handelDeleteService = (id) => {
        const procced = window.confirm('are you want sure delete?')
        if (procced) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                })
        }
        else {
            alert("okk..no problem..just chill")
        }
    }
    return (
        <div>

            <ul className='text-center mt-4'>
                {
                    services.map(service => <li key={service._id}><h3>{service.name} <button onClick={() => handelDeleteService(service._id)}>Delete</button></h3> </li>)
                }
            </ul>
        </div>
    );
};

export default ManageServices;