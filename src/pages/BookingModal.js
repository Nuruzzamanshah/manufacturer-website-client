import React from 'react';

const BookingModal = ({booking, setBooking}) => {
    const {name, picture, minimusguantity} = booking;
    const handleBooking = event =>{
        event.preventDefault();
        setBooking(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">Buy Now: {name}!</h3>
    <form onSubmit={handleBooking}>
    <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
    <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="Submit" value='Submit' class="btn btn-primary w-full max-w-xs" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;