import React from 'react';
import notfound from '../../assets/images/notfound.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={notfound} alt=''/>
        </div>
    );
};

export default NotFound;