import React from 'react';

const Outdoor = ({outdoor}) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={outdoor.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{outdoor.name}</h2>
                <p>{outdoor.des}</p>
                <p>Minimus-Order: {outdoor.minimusorder}</p>
                <p>Availble-Quantity: {outdoor.availblequantity}</p>
                <p>Price: {outdoor.price}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
    );
};

export default Outdoor;