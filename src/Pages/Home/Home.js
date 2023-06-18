import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'


const Home = () => {

    return (
        <div className="home">
            <div className="home-main">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;