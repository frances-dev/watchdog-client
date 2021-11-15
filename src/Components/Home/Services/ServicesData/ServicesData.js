import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../App.css'


const ServicesData = ({ service }) => {
    return (
        <div className='my-grids-container'>
      <div class="my-card">
        <div className='card-img-container'>
          <img src={service.img} class="card-img-top" alt="..." />
          <p className="card-category">${service.price}</p>
        </div>
        <h2 className="card-title">{service.title}</h2>
        <div className="card-body">
          <h6 className="card-text2">{service.desc.slice(0, 150)}.</h6>
        </div>

        {/* ADD to cart & Details Button */}
        <div className="d-flex justify-content-center">
            <Link style={{ textDecoration: "none", color: 'black' }} to={`/book/${service._id}`}>
                    <button className="btn ordered-btn w-100">See Details & Order Now</button>
            </Link>
        </div>
      </div>
    </div>
    );
};

export default ServicesData;