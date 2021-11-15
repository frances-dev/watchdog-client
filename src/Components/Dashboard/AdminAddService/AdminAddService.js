import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Dashboard from '../Dashboard';
import './AdminAddService.css';
import { UserContext } from '../../../App';
import { loggedInInfo } from '../../Login/loginManager';


const AdminAddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const loggedUser = loggedInInfo();
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const history = useHistory();
    const onSubmitEvent = () => {
        const formData = new FormData()
        formData.append('img', info.img);
        formData.append('title', info.title);
        formData.append('desc', info.desc);
        formData.append('price', info.price);
        formData.append('spec', info.spec);
        formData.append('variation', info.variation);

        fetch('https://secure-island-68647.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => {
                console.error(error)
            })
        history.push("/");
    };

    return (
        <section className="m-3">

            <div className="row mt-5">
                <div className="col-md-3">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="bg-white">Add Service</h4>
                        <h4>{loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name : loggedInUser.displayName || loggedUser.displayName}</h4>
                    </div>
                    <div className="adminService p-4">
                        <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
                            <section className="addServiceSec">
                                <div className="row p-4">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <div className="input-group-prepend">
                                                
                                            <b> Service Title </b>
                                            </div>
                                            <input onBlur={handleBlur} className="w-100 mx-auto form-control" name="title" placeholder="Enter title" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Service Title is required</span>}
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group-prepend">
                                                <b> Description </b>
                                            </div>
                                            <textarea onBlur={handleBlur} className="w-100 mx-auto form-control" name="desc" placeholder="Description" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Service Description is required</span>}
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group-prepend">
                                            
                                            <b> Variation </b>
                                            </div>
                                            <textarea onBlur={handleBlur} className="w-100 mx-auto form-control" name="variation" type="number" placeholder="Product Variation" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Product Variation is required</span>}
                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="mb-3">
                                            <div className="input-group-prepend">
                                                <b> Price </b>
                                            </div>
                                            <input onBlur={handleBlur} className="w-100 mx-auto form-control" name="price" type="number" placeholder="Price" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Service Price is required</span>}
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group-prepend">
                                            
                                            <b> Specification </b>
                                            </div>
                                            <textarea onBlur={handleBlur} className="w-100 mx-auto form-control" name="spec" type="number" placeholder="Enter Specification" ref={register({ required: true })} />
                                            {errors.eventName && <span className="error">Service Title is required</span>}
                                        </div>

                                        <b>Input Image URL</b>
                                        <div className="input-group mb-3">
                                            <input id="file" onChange={handleBlur} className="w-100 mx-auto bg-light form-control" type="name" name="img" ref={register({ required: true })} />
                                            {errors.eventBanner && <span className="error">Image is required</span>}
                                        </div>

                                    </div>
                                </div>
                            </section>
                            <div className=" d-flex justify-content-end mt-2">
                                <button className="btn btn-success" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminAddService;