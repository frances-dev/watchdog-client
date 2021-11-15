import React from 'react';

const IndividualBook = ({service}) => {
    return (
        <div>
            <div>
                        <img className='detImg' src={service.img} alt='' />
                        </div> <br />
                        <br />
                        <h3>{service.name} </h3>

                        <h4 className="mt-4"><b>Pricing Details -</b></h4>
                        <p>Price :{service.price}</p>
                        <p>{service.desc}</p>

                        <h4 className="mt-4"><b>{service.spec}</b></h4>
                        <p>Model Variations :{service.variations} </p>
        </div>
    );
};

export default IndividualBook;