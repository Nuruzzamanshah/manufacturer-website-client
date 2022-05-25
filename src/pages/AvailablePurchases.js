import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Pservice from './Pservice';

const AvailablePurchases = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Purchase on {format(date, 'pp')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(pservice =><Pservice
                    key={pservice._id}
                    pservice={pservice}
                    ></Pservice>)
                }
            </div>
        </div>
    );
};

export default AvailablePurchases;