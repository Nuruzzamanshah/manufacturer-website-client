import React from 'react';

const Pservice = ({pservice , setPurchase}) => {
    const {name, slots} = pservice;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-primary text-xl font-bold">{name}</h2>
                <p>{
                    slots.length > 0
                    ? <span>{slots[0]}</span>
                    : <span className='text-red-500'>No Purchase Available. try another day</span>
                    }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center">
                <label for="booking-modal"
                disabled={slots.length=== 0} 
                onClick={() => setPurchase(pservice)}
                 className="btn btn-sm btn-primary">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Pservice;