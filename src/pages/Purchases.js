import React,{useEffect, useState} from 'react';
import BookingModal from './BookingModal';
import Purchase from './Purchase';

const Purchases = () => {
    const [purchases, setPurchases] = useState([]);
    const [booking, setBooking] = useState(null);

    useEffect( () =>{
        fetch('http://localhost:5000/purchase')
        .then(res => res.json())
        .then(data =>setPurchases(data));
    },[])
    return (
        <div className='text-primary text-center font-bold text-4xl my-10'>
            <h1 className='my-10'>Quantity Purchase</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20'>
                {
                    purchases.map(purchase =><Purchase
                    key={purchase._id}
                    items={purchase}
                    setBooking={setBooking}
                    ></Purchase>)
                }
            </div>
            {booking && <BookingModal
             booking={booking}
             setBooking={setBooking}
             ></BookingModal>}
        </div>
    );
};

export default Purchases;