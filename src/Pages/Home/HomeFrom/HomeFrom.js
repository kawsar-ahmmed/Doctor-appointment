import React from 'react';
import '../../Home/Home.css'

const HomeFrom = () => {
    return (
        <section className='home-form'>
            <form className=' container mx-auto  py-[90px] px-4'>
                <div className='text-center pb-8'>
                    <h3 className='text-[#19D3AE]'>Contact Us</h3>
                    <h2 className=' text-[34px]'>Stay connected with us</h2>
                </div>
                <div className=' flex flex-col items-center space-y-4'>
                    <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-md" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-md" />
                    <textarea className="textarea textarea-bordered w-full max-w-md" placeholder="Bio"></textarea>
                    <button className='form-button bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-[20px] py-[12px] rounded text-white'>Submit</button>
                </div>
            </form>
        </section>
    );
};

export default HomeFrom;