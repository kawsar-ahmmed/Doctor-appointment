import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import { format } from 'date-fns';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const availableAppointment = [
        {
            _id: 1,
            title: 'Teeth Orthodontics',
        },
        {
            _id: 2,
            title: 'Cosmetic Dentistry',
        },
        {
            _id: 3,
            title: 'Teeth Cleaning',
        },
        {
            _id: 4,
            title: 'Cavity Protection',
        },
        {
            _id: 5,
            title: 'Pediatric Dental',
        },
        {
            _id: 6,
            title: 'Oral Surgery',
        }
    ]
    return (
        <section className='container mx-auto'>
            <AppointmentBanner
                date={date}
                setDate={setDate}
            ></AppointmentBanner>
            <div className='text-center'>
                <h2 className='text-[#19D3AE] text-[22px] pb-4'>Available Services on April {format(date, 'PP')}</h2>
                <p>Please select a service.</p>
                <AvailableAppointment
                date = {date}
                ></AvailableAppointment>
                {/* <div className=' grid lg:grid-col-3 md:grid-cols-3 grid-cols gap-10 py-20'>
                    {
                        availableAppointment.map(appointment =>
                            <AvailableAppointment

                                key={appointment._id}
                                appointment={appointment}
                                date={date}
                                setDate={setDate}
                            ></AvailableAppointment>
                        )
                    }
                </div> */}
            </div>

        </section>
    );
};

export default Appointment;