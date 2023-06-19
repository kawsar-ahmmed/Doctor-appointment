import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    return (
        <div>
            <div className="card lg:max-w-lg shadow-lg">
                <div className="card-body">
                    <h2 className="card-title text-primary">Card title!</h2>
                    <p>{review.description}</p>
                    <div className="flex items-center pt-4">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} />
                            </div>
                        </div>
                        <div className='pl-4'>
                            <h4>{review.name}</h4>
                            <h5>{review.location}</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;