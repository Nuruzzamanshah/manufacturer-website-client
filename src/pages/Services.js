import React from 'react';
import tool1 from '../assets/images/tool/tool1.png';
import tool2 from '../assets/images/tool/tool2.png';
import tool3 from '../assets/images/tool/tool3.png';
import tool4 from '../assets/images/tool/tool4.png';
import tool5 from '../assets/images/tool/tool5.png';
import tool6 from '../assets/images/tool/tool6.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Steel Grip Claw Hammer',
            des: 'Tubular Steel Claw Hammer is constructed of a solid cast steel head with a semi-polished lacquer-coated finish.',
            img: tool1,
            minimusorder: 50,
            availblequantity: 200,
            price: '$99.9'
        },
        {
            _id: 2,
            name: '12-Point (6-Pc.) Metric Wrench Set',
            des: 'Surface Drive technology on box-end virtually eliminates fastener rounding',
            img: tool2,
            minimusorder: 40,
            availblequantity: 210,
            price: '$25.9'
        },
        {
            _id: 3,
            name: 'Pipe Wrench (8-In. Length)',
            des: 'Full floating hook jaw creates a natural ratcheting action for work in tight spaces',
            img: tool3,
            minimusorder: 50,
            availblequantity: 250,
            price: '$22.9'
        },
        {
            _id: 4,
            name: '25-Pk. Plastic Ribbed Head Anchor',
            des: 'Can be also be used in base materials such as brick, concrete, and hollow block',
            img: tool4,
            minimusorder: 60,
            availblequantity: 400,
            price: '$5.9'
        },
        {
            _id: 5,
            name: '2-Ton Galvanized Forged Steel Anchor Shackle',
            des: '1/2 Inch Size, Working Load Limit: 2 ton, Drop Forged Galvanized Screw Pin Anchor Shackle',
            img: tool5,
            minimusorder: 30,
            availblequantity: 200,
            price: '$5.9'
        },
        {
            _id: 6,
            name: 'Steel Faux Finish Paint Trowel',
            des: 'Reviews. Features. Size: 200x80mm - 7.9x3.2 in; Blade thicknes 0.6 mm - flexible; Trapezoid Shape - Rounded edges',
            img: tool6,
            minimusorder: 50,
            availblequantity: 200,
            price: '$99.9'
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center text-4xl font-bold'>
                <h2 className='text-primary'>Our Tools Range</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service =><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;