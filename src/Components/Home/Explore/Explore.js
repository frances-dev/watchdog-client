import React, { useEffect, useState } from 'react';
import ServicesData from '../Services/ServicesData/ServicesData';

const Explore = () => {
    const [services, setServices] = useState([]);
    const [redirect, setRedirect] = useState();

    // Database
    useEffect(() => {
        fetch("https://secure-island-68647.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setRedirect(true)
            })
    }, [redirect]);

    return (
        <div>
            {services?.length === 0 && <h1 align="center"> Please Wait.... </h1>} <br />
        <div className='my-margin2'>
            <div className="main-container d-flex flex-column">
                <h2 className="my-4 p-heading fw-bold">Explore our All Services</h2>
                <div className='my-grids'>
                    {
                        services.slice(3, 9)?.map(service => (
                        <ServicesData service={service} key={service.name}></ServicesData>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    );
};

export default Explore;