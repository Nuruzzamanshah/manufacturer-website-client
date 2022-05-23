import React from 'react';
import product1 from '../assets/images/products/products1.jpg';
import product2 from '../assets/images/products/products2.jpg';
import product3 from '../assets/images/products/products3.jpg';
import Product from './Product';

const Products = () => {
    const products = [
        {
            _id: 1,
            name: 'Power Saw',
            des: 'A power saw is a portable mechanical machine used for both industrial and DIY projects.',
            img: product1,
            minimusorder: 20,
            availblequantity: 100,
            price: '$350.9'
        },
        {
            _id: 2,
            name: 'Screwdriver Pallet',
            des: 'screwdriver, tool, usually hand-operated, for turning screws with slotted heads.',
            img: product2,
            minimusorder: 50,
            availblequantity: 150,
            price: '$199.9'
        },
        {
            _id: 3,
            name: 'Safety Gloves',
            des: 'Safety gloves are designed to protect a worker hand from danger so that they can perform their work safely.',
            img: product3,
            minimusorder: 20,
            availblequantity: 80,
            price: '$120.9'
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center text-4xl font-bold'>
                <h2 className='text-primary'>New Products On Market</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product =><Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;