import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;


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
          <label
            onClick={() => {
              setTreatment(service);
            }}
            disabled={slots.length === 0}
            className='btn btn-primary text-neutral' htmlFor="my_modal_6" >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
