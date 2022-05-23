import React from 'react';

const Product = ({product}) => {
    return (
        
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={product.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{product.name}</h2>
                <p>{product.des}</p>
                <p>Minimus-Order: {product.minimusorder}</p>
                <p>Availble-Quantity: {product.availblequantity}</p>
                <p>Price: {product.price}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
    );
};

export default Product;