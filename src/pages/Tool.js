import React from 'react';

const Tool = ({tool}) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={tool.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{tool.name}</h2>
                {/* <p>{tool.des}</p> */}
                {/* <p>Minimus-Order: {tool.minimusorder}</p> */}
                {/* <p>Availble-Quantity: {tool.availblequantity}</p> */}
                <p>Price: {tool.price}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
    );
};

export default Tool;