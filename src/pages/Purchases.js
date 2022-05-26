import React, { useState } from 'react';
import AvailablePurchases from './AvailablePurchases';
import PurchaseBanner from './PurchaseBanner';
const Purchases = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='text-primary'>
            <h1 className='my-10 text-center'>Quantity Purchase</h1>
             <PurchaseBanner date={date} setDate={setDate}></PurchaseBanner>
             <AvailablePurchases date={date}></AvailablePurchases>
        </div>
    );
};

export default Purchases;