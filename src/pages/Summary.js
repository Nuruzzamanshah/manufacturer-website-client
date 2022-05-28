import React from 'react';
import summary1 from '../assets/images/summary/countries.jpg';
import summary2 from '../assets/images/summary/completed.jpg';
import summary3 from '../assets/images/summary/happy.jpg';
import summary4 from '../assets/images/summary/feedbace.jpg';
import Summarys from './Summarys';
const Summary = () => {
    const summary = [
        {
            _id: 1,
            name: 'Countries',
            img: summary1,
            des: 75
        },
        {
            _id: 2,
            name: 'Complete Projects',
            img: summary2,
            des: 535
        },
        {
            _id: 3,
            name: 'happy Clients',
            img: summary3,
            des: 435
        },
        {
            _id: 4,
            name: 'Feedbacks',
            img: summary4,
            des: 355
        }
    ]
    return (
        <div className='my-20'>
            <div className='text-center text-4xl font-bold'>
                <h2 className='text-primary'>MILLIONS BUSINESS TRUST US</h2>
                <h2 className='text-primary text-xl my-10'>TRY TO UNDERSTAND USERS EXPECTATION</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    summary.map(summarys =><Summarys
                    key={summarys._id}
                    summarys={summarys}
                    ></Summarys>)
                }
            </div>
        </div>
    );
};

export default Summary;