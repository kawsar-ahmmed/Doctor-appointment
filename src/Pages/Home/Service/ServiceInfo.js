import React from 'react';
import infoImg from '../../../assets/images/treatment.png'

const ServiceInfo = () => {
    return (
        <div className='lg:mt-[120px] mt-[60px] md:mt-[80px]'>
            <div className="card card-side  grid lg:grid-cols-2 md:grid-cols-1 items-center gap-10">
                <figure><img className=' lg:w-screen md:h-[870px] md:w-screen lg:h-[570px] rounded-[10px]' src={infoImg} alt="Movie" /></figure>
                <div className="pt-8 lg:text-start md:text-start text-center">
                    <h2 className="card-title text-[40px] leading-[48px] text-[#3A4256]">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-center lg:justify-start md:justify-start">
                        <button className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-[20px] py-[12px] rounded text-white mt-[35px]'>GET STARTED</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServiceInfo;