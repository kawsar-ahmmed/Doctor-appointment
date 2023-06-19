import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;

  const handleBookingAppointment = () => {
    // Perform any necessary actions before opening the modal
    if (window.bookingModal && typeof window.bookingModal.showModal === 'function') {
      window.bookingModal.showModal();
    }
  };



  return (
    <div className="card lg:max-w-screen-lg shadow-xl items-center">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length ? (
            <span>
              {slots[0]}
              <br />
              {slots.length} Space Available
            </span>
          ) : (
            <span className="text-red-600">No Slot Available</span>
          )}
        </p>
        <div className="card-actions justify-center">
          <button
            onClick={() => {
              setTreatment(service);
              handleBookingAppointment();
            }}
            disabled={slots.length === 0}
            className="btn btn-primary"
          >
            Booking Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
