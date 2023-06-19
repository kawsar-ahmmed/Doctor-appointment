import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import '../Home.css'
const MakeAppointment = () => {
    return (
        <section className='make-appointment px-2'>
            <div className=" container mx-auto flex items-center">
                <div className="img flex-1 hidden lg:block">
                    <img className=' mt-[-250px]' src={doctor} alt="" />
                </div>
                <div className="content flex-1 text-center lg:text-start md:text-start text-white">
                    <h2 className='mt-[30px] text-[22px text-[#19D3AE] '>Appointment</h2>
                    <h1 className='text-[32px] lg:text-[52px] font-bold'>Make an appointment Today</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className=" mb-[30px] card-actions justify-center lg:justify-start md:justify-start">
                        <button className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-[20px] py-[12px] rounded text-white mt-[35px]'>GET STARTED</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;