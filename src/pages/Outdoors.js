import React from 'react';
import outdoor1 from '../assets/images/outdoors/outdoors1.jpg';
import outdoor2 from '../assets/images/outdoors/outdoors2.jpg';
import outdoor3 from '../assets/images/outdoors/outdoors3.jpg';
import outdoor4 from '../assets/images/outdoors/outdoors4.jpg';
import outdoor5 from '../assets/images/outdoors/outdoors5.jpg';
import outdoor6 from '../assets/images/outdoors/outdoors6.jpg';
import Outdoor from './Outdoor';

const Outdoors = () => {
    const outdoors = [
        {
            _id: 1,
            name: 'Trimmers & Edgers',
            img: outdoor1,
            minimusorder: 20,
            availblequantity: 100,
            price: '$350.9'
        },
        {
            _id: 2,
            name: 'Lawn Mowers',
            img: outdoor2,
            minimusorder: 50,
            availblequantity: 150,
            price: '$199.9'
        },
        {
            _id: 3,
            name: 'Blowers & Vacs',
            img: outdoor3,
            minimusorder: 20,
            availblequantity: 80,
            price: '$120.9'
        },
        {
            _id: 4,
            name: 'Tillers & Cultivators',
            img: outdoor4,
            minimusorder: 20,
            availblequantity: 80,
            price: '$120.9'
        },
        {
            _id: 5,
            name: 'Lawn Sweepers',
            img: outdoor5,
            minimusorder: 20,
            availblequantity: 80,
            price: '$120.9'
        },
        {
            _id: 6,
            name: 'Chainsaws',
            img: outdoor6,
            minimusorder: 20,
            availblequantity: 80,
            price: '$120.9'
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center text-4xl font-bold'>
                <h2 className='text-primary'>Shop Makita Rule the Outdoors Categories</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3'>
                {
                    outdoors.map(outdoor =><Outdoor
                    key={outdoor._id}
                    outdoor={outdoor}
                    ></Outdoor>)
                }
            </div>
        </div>
    );
};

export default Outdoors;