import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import Info from './Item/Info';
import Services from './Service/Services';
import MakeAppointment from './Service/MakeAppointment';
import Testimonials from './Testimonial/Testimonials';
import HomeFrom from './HomeFrom/HomeFrom';
import Footer from './Footer';


const Home = () => {

    return (
        <div className="">
            <div className="home-main">
                <Banner></Banner>
            </div>
            <div className="cards py-12 container mx-auto">
                <Info></Info>
            </div>
            <div className='mx-[20px]'>
                <Services></Services>
            </div>
            <div className='lg:pt-[250px]'>
                <MakeAppointment></MakeAppointment>
            </div>
            <div className='py-10 lg:py-20 md:py-15'>
                <Testimonials></Testimonials>
            </div>
            <div>
                <HomeFrom></HomeFrom>
            </div>
        </div>
    );
};

export default Home;