import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot)
        setTreatment(null)
    }



    return (
        <div>
            <dialog id="bookingModal" className="modal modal-bottom sm:modal-middle items-center z-30" >
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black z-10">✕</button>
                <form onSubmit={handleBooking} method="dialog" className="modal-box bg-white">
                    <h3 className="font-bold text-black">{name}</h3>
                    <div className=' space-y-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs bg-slate-300" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs bg-slate-300" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs bg-slate-300" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs bg-slate-300" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-300" />
                    </div>
                    <div className="modal-action justify-center">
                        <button className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-[20px] py-[12px] rounded text-white mt-[35px]'>GET STARTED</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default BookingModal;