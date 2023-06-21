import { format } from "date-fns";

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
  
    const handleBooking = (event) => {
      event.preventDefault();
      const date = event.target.date.value;
      const slot = event.target.slot.value;
      const name = event.target.name.value;
      const phone = event.target.phone.value;
      const email = event.target.email.value;
      const slotsBooked = { date, slot, name, phone, email };

      const url = `http://localhost:5001/services`
      fetch(url, {
        method: "POST",
        headers : {
            'content-type': 'application/json'
        },
        body: JSON.stringify(slotsBooked)
      })
      .then(res=> res.json())
      .then(data=> {
        console.log(data)
      })
    };
  
    return (
      <div className="">
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg text-start text-secondary">{name}</h3>
            <form onSubmit={handleBooking} className="pt-[30px] space-y-5">
              <input name="date" disabled type="text" value={`${format(date, 'PP')}`} placeholder="Type here" className="input input-bordered w-full max-w-lg" />
              <select name="slot" className="select select-bordered w-full max-w-lg">
                <option disabled selected>Who shot first?</option>
                {slots.map((slot) => <option key={slot}>{slot}</option>)}
              </select>
              <input name="name" type="text" placeholder="Full Name" className="input border-[#CFCFCF] w-full max-w-lg" />
              <input name="phone" type="phone" placeholder="Phone Number" className="input border-[#CFCFCF] w-full max-w-lg" />
              <input name="email" type="email" placeholder="Email" className="input border-[#CFCFCF] w-full max-w-lg" />
              <button className="w-full mt-7 uppercase btn btn-active bg-accent hover:bg-primary text-white border-none">Book Appointment</button>
            </form>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookingModal;
  