import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {

    return (
        <div className=' grid md:grid-cols-3 lg:grid-cols-3'>
            <InfoCard bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]" cardTitle="Opening Hours" cardDescription='Lorem Ipsum is simply dummy text of' img={clock} ></InfoCard>
            <InfoCard bgClass="bg-[#3A4256] text-primary-content" cardTitle="Visit our location" cardDescription='Brooklyn, NY 10036, United States' img={marker} ></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]" cardTitle="Contact us now" cardDescription='+000 123 456789' img={phone} ></InfoCard>
        </div>
    );
};

export default Info;