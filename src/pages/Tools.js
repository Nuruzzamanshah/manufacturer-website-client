import React from 'react';
import tools1 from '../assets/images/tools/tools1.jpg';
import tools2 from '../assets/images/tools/tools2.jpg';
import tools3 from '../assets/images/tools/tools3.jpg';
import tools4 from '../assets/images/tools/tools4.jpg';
import Tool from './Tool';

const Tools = () => {
    const tools = [
        {
            _id: 1,
            name: 'Power Saw',
            des: 'A power saw is a portable mechanical machine used for both industrial and DIY projects.',
            img: tools1,
            minimusorder: 20,
            availblequantity: 100,
            price: '$350.9'
        },
        {
            _id: 2,
            name: 'Screwdriver Pallet',
            des: 'screwdriver, tool, usually hand-operated, for turning screws with slotted heads.',
            img: tools2,
            minimusorder: 50,
            availblequantity: 150,
            price: '$199.9'
        },
        {
            _id: 3,
            name: 'Safety Gloves',
            des: 'Safety gloves are designed to protect a worker hand from danger so that they can perform their work safely.',
            img: tools3,
            minimusorder: 20,
            availblequantity: 80,
            price: '$120.9'
        },
        {
            _id: 4,
            name: 'Safety Gloves',
            des: 'Safety gloves are designed to protect a worker hand from danger so that they can perform their work safely.',
            img: tools4,
            minimusorder: 20,
            availblequantity: 80,
            price: '$120.9'
        }
    ]
    return (
        <div className='my-20'>
            <div className='text-center text-4xl font-bold'>
                <h2 className='text-primary'>THE RIGHT TOOLS DO IT.</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    tools.map(tool =><Tool
                    key={tool._id}
                    tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;