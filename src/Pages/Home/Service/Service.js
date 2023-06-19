import React from 'react';

const Service = ({ service }) => {
    const { title, description, serviceIcon } = service;
    return (
        <div className='flex flex-col lg:max-w-lg items-center shadow-xl p-[60px] rounded-[30px]'>
            <figure>
                <img src={serviceIcon} alt="" />
            </figure>
            <div className="service-cont mt-[34px]">
                <h2 className='text-[20] text-black font-bold pb-3'>{title}</h2>
                <p className='text-[16px] text-black '>{description}</p>
            </div>
        </div>
    );
};

export default Service;