import React,{useEffect, useState} from 'react';
import BookingModal from './BookingModal';
import Purchase from './Purchase';

const Purchases = () => {
    const [purchases, setPurchases] = useState([]);
    const [booking, setBooking] = useState(null);

    useEffect( () =>{
        fetch('purchases.json')
        .then(res => res.json())
        .then(data => setPurchases(data));
    },[])
    return (
        <div className='text-primary text-center font-bold text-4xl my-10'>
            <h1>Quantity Purchase</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    purchases.map(purchase =><Purchase
                    key={purchase._id}
                    purchase={purchase}
                    setBooking={setBooking}
                    ></Purchase>)
                }
            </div>
            {booking && <BookingModal booking={booking}></BookingModal>}
        </div>
    );
};

export default Purchases;