import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Pservice from './Pservice';

const AvailablePurchases = ({date}) => {
    const [services, setServices] = useState([]);
    const [purchase, setPurchase] = useState(null);

    useEffect( () =>{
        fetch('https://arcane-stream-26784.herokuapp.com/purchase')
        .then(res=> res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className='px-14'>
            <h4 className='text-xl text-primary text-center my-12'>Available Purchase on {format(date, 'pp')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(pservice =><Pservice
                    key={pservice._id}
                    pservice={pservice}
                    setPurchase={setPurchase}
                    ></Pservice>)
                }
            </div>
            {purchase && <BookingModal
             date={date} purchase={purchase}
             setPurchase={setPurchase}
             >
            </BookingModal>}
        </div>
    );
};

export default AvailablePurchases;