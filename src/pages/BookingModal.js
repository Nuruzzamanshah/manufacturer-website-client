import React from 'react';
import auth from './../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({booking, setBooking}) => {
    const {name, picture, minimusguantity} = booking;
    const [user, loading, error] = useAuthState(auth);
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
                  <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                  <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                  <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                  <input type="Submit" value='Submit' class="btn btn-primary w-full max-w-xs" />
                  </form>
                </div>
          </div>
        </div>
    );
};

export default BookingModal;