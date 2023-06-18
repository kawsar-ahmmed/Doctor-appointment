import React from 'react';
import chair from '../../../assets/images/chair.png'


const Banner = () => {
    return (
        <div className='banner-main hero container min-h-screen mx-auto m-auto sm:px-2'>
            <div className="flex items-center flex-col lg:flex-row-reverse space-y-5">
                <div className="banner-img ">
                    <img src={chair} alt="" />
                </div>
                <div className="banner-content text-[#3A4256] lg:text-start text-center">
                    <h1 className=' lg:w-5/6 lg:text-[58px] md:text-[58px] font-bold leading-none text-[30px] mb-[15px] md:text-start lg:text-start'>Your New Smile Starts Here</h1>
                    <p className='lg:w-5/6' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-[20px] py-[12px] rounded text-white mt-[35px]'>GET STARTED</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;