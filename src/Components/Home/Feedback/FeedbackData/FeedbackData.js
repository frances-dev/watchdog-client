import { Avatar } from '@material-ui/core';
import React from 'react';
import Rating from 'react-rating';

const FeedbackData = ({ feedback }) => {
    return (
        <div className="col-md-4">
            <div style={{ borderRadius: '5px' }} className="m-1 border border-1 p-4">
                <div className="d-flex justify-content-start">
                    <Avatar src={feedback.img}></Avatar>
                    <div>
                        <h5 className="ml-3"><strong>{feedback.name}</strong> </h5>
                        <h6 className="ml-3"><strong> {feedback.desig}</strong></h6></div>
                </div>
                <p className="text-secondary">{feedback.desc}</p>
                <div className="text-center d-flex justify-content-center">
                    <p className="text-bold">Ratings: </p>
                    <Rating
                        initialRating={feedback.ratings}
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                        readonly>
                    </Rating>
                </div>
            </div>
        </div >
    );
};
export default FeedbackData;