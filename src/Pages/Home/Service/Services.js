import React from 'react';
import Service from './Service';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceInfo from './ServiceInfo';

const Services = () => {
    const services = [
        {
            _id: '1',
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: cavity

        },
        {
            _id: '2',
            title: 'Cavity FillingCavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: fluoride

        },
        {
            _id: '3',
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: whitening

        },
    ]
    return (
        <div className='container mx-auto pb-[60px]'>
            <div className="service-content text-center pb-[60px]">
                <h1 className=' text-[20px] text-[#19D3AE] pb-1'>OUR SERVICES</h1>
                <p className='text-[38px] text-[#3A4256] '>Services We Provide</p>
            </div>
            <div className="service grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 text-center gap-10">
                {
                    services.map(service =>
                        <Service
                        key= {service._id}
                        service = {service}
                        ></Service>
                    )
                }
            </div>
            <ServiceInfo></ServiceInfo>
        </div>
    );
};

export default Services;