import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5001/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='container mx-auto'>
            <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;