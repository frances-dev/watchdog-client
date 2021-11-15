import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbars from '../Home/Header/Navbar/Navbars';
import ServicesData from '../Home/Services/ServicesData/ServicesData';
import IndividualBook from './IndividualBook';

const Book = () => {
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});
    const [redirect, setRedirect] = useState();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const history = useHistory();
    const onSubmitEvent = () => {
        const formData = new FormData()
        // console.log(info);
        formData.append('name', info.name);
        formData.append('desc', info.desc);
        formData.append('email', info.email);
        formData.append('service', info.service);
        formData.append('price', info.price);


        // fetch('https://secure-island-68647.herokuapp.com/services', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .catch(error => {
        //         console.error(error)
        //     })
        // history.push("/userServices");
    };



    const { _id } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://secure-island-68647.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setRedirect(true)
            })
    }, [redirect]);

    useEffect(() => {
        fetch(` https://safe-peak-05375.herokuapp.com/book/${_id}`)
            .then(res => res.json())
            .then((data) => {
                setServices(data);
                // console.log(data);
            });
    }, [_id])

    return (
        <div>
            <Navbars></Navbars>
            <div className="detailsSec d-flex justify-content-center align-items-center">
                <h1>Our Services</h1>
            </div>
            <div className="container mt-3 mb-3">

                <div className="row text-dark">
                    <div className="col-md-8">

                    {
                        services.slice(3, 9)?.map(service => (
                            <IndividualBook service={service} key={service.name}>
                            </IndividualBook>
                        ))
                    }
                    
                    </div>
                    <div className="col-md-4">

                        <div className="adminService p-4">
                            <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
                                <section className="orderServe mt-1">

                                    <div className="mb-3">
                                        <input style={{ border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" value={services.name} name="service" placeholder="Service" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Service name is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <input style={{ border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="name" placeholder="Full Name" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Name is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <input style={{ border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="email" placeholder="Your Email Address" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Email is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <input style={{ border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" type="number" name="phone" placeholder="Phone Number" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Phone number is required</span>}
                                    </div>

                                    <div className="mb-3">
                                        <textarea style={{ height: "120px", width: "100%", border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="desc" placeholder="Message" ref={register({ required: true })} />
                                        {errors.eventName && <span className="error">Description is required</span>}
                                    </div>

                                    <div className="row">

                                        <div className="col-md-6">
                                            <input style={{ border: "none" }} onBlur={handleBlur} className="w-100 form-control" value={services.price} name="price" placeholder="Price" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Price is required</span>}
                                        </div>

                                        <div className="col-md-6">

                                        </div>
                                    </div>

                                    <p className="text-danger text-center">Please make sure you have clicked all the input tab before submitting</p>
                                    <button style={{ fontSize: "12px" }} className="btn btn-dark w-100 p-3" type="submit">Request Booking</button>

                                </section>

                            </form>
                        </div>


                    </div>

                </div>


            </div>
        </div>
    );
};

export default Book;