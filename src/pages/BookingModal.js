import React from 'react';
import auth from './../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {toast } from 'react-toastify';
import { format } from 'date-fns';

const BookingModal = ({date, purchase, setPurchase}) => {
    const {_id, name, slots} = purchase;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'pp');
    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(_id, name ,slot);

        const booking = {
          purchaseId: _id,
          purchase:name,
          date: formattedDate,
          slot,
          userEmail: user.email,
          userName : user.displayName,
          phone : event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.success){
            toast(`Purchase is set, ${formattedDate} at ${slot}`)
          }
          else{
            toast.error(`Already Purchase is set on  ${data.booking?.data} at ${data.booking?.slot}`)
          }
          setPurchase(null);
        })
    }
    return (
<div>
  <input type="checkbox" id="booking-modal" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
      <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="font-bold text-lg">Buy Now: {name}!</h3>
        <form className='grid grid-cols-1 gap-3 justify-items-center mt-2' onSubmit={handleBooking}>
        <input type="text" name='name' disabled value={format(date, 'pp')} className="input input-bordered w-full max-w-xs" />
        <select name='slot' className="select select-bordered w-full max-w-xs">
          {
            slots.map(slot =><option value={slot}>{slot}</option>)
          }
          </select>
        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
        <input type="Submit" value='Submit' className="btn btn-primary w-full max-w-xs" />
        </form>
      </div>
          </div>
  </div>
    );
};

export default BookingModal;