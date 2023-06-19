import React from 'react';

const InfoCard = ({ img, cardDescription, cardTitle, bgClass }) => {

    return (
        <div>
            <div className={`card card-side shadow-xl pl-[20px] py-6 text-white ${bgClass} m-[15px]`}>
                <figure><img  src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardDescription}</p>

                </div>
            </div>

        </div>
    );
};

export default InfoCard;