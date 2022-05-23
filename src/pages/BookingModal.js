import React from 'react';

const BookingModal = ({booking}) => {
    const {name, picture, MinimusQuantity} = booking;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">Buy Now: {name}!</h3>
    <form>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </form>
    <div className="modal-action">
      <label for="booking-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;