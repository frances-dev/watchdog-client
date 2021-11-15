import { Avatar } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard';
import { loggedInInfo } from '../../Login/loginManager';
import Rating from 'react-rating';

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const loggedUser = loggedInInfo();
    const [admin, setAdmin] = useState({});
    const history = useHistory();


    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const onSubmitEvent = () => {
        const formData = new FormData()
        formData.append('img', loggedInUser.photo);
        formData.append('name', admin.name);
        formData.append('desc', admin.desc);
        formData.append('desig', admin.desig);
        formData.append('ratings', admin.ratings);


        fetch('https://secure-island-68647.herokuapp.com/review', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    document.getElementById("reviewUp").innerHTML = "<p> Review Has created successfully <br/> Go to <a class='btn btn-dark' href='/#review'>Review Section</a> </p>"
                }
            })
            .catch(error => {
                // console.error(error)
            })
        history.push('/#review')
    };

    return (
        <section className="m-3">

            <div className="row mt-5">
                <div className="col-md-3">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="bg-white">Add Review</h4>
                        <h4>{loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name : loggedInUser.displayName || loggedUser.displayName}</h4>
                    </div>
                    <div className="adminService p-4">
                        <form id="reviewUp" action="" onSubmit={handleSubmit(onSubmitEvent)}>
                            <section className="orderServe mt-5">

                                <Avatar src={loggedInUser.photo}></Avatar> <br />

                                <div className="mb-3">
                                    <input style={{ border: "none" }} defaultValue={loggedInUser.name} onBlur={handleBlur} className="w-100 mx-auto form-control" name="name" placeholder="Your Name" ref={register({ required: true })} />
                                    {errors.eventName && <span className="error">Name is required</span>}
                                </div>

                                <div className="mb-3">
                                    <input style={{ border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="desig" placeholder="Your Designation" ref={register({ required: true })} />
                                    {errors.eventName && <span className="error">Designation is required</span>}
                                </div>

                                <div className="mb-3">
                                    <textarea style={{ height: "120px", width: "100%", border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="desc" placeholder="Write Your Comment Here" ref={register({ required: true })} />
                                    {errors.eventName && <span className="error">A Few Line of Comments is required</span>}
                                </div>

                                <div className="mb-3">
                                  
                                    <input style={{ border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" type="number" name="ratings" placeholder="Your Ratings" ref={register({ required: true })} />
                                    {errors.eventName && <span className="error">Rating is required</span>}

                                </div>

                                <button style={{ textDecoration: "none", color: "white", fontSize: "14px" }} className="btn btn-warning w-25 p-3" type="submit">Send</button>

                            </section>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;