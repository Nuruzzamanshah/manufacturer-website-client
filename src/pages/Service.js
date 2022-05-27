import React from 'react';

const Service = ({service}) => {
    return (
            <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={service.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>{service.des}</p>
                <p>Minimus-Order: {service.minimusorder}</p>
                <p>Availble-Quantity: {service.availblequantity}</p>
                <p>Price: {service.price}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
    );
};

export default Service;