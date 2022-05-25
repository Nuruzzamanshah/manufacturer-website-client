import React from 'react';

const Pservice = ({pservice}) => {
    const {name, slots} = pservice;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{
                    slots.length > 0
                    ? <span>{slots[0]}</span>
                    : <span className='text-red-500'>No Purchase Available. try another day</span>
                    }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center">
                <button disabled={slots.length=== 0} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Pservice;