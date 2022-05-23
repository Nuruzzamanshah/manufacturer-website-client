import React from 'react';
import purchase1 from '../assets/images/purchase/purchase1.jpg';
import purchase2 from '../assets/images/purchase/purchase2.jpg';
import purchase3 from '../assets/images/purchase/purchase3.jpg';
import purchase4 from '../assets/images/purchase/purchase4.jpg';
import purchase5 from '../assets/images/purchase/purchase5.jpg';
import purchase6 from '../assets/images/purchase/purchase6.jpg';
import purchase7 from '../assets/images/purchase/purchase7.jpg';
import purchase8 from '../assets/images/purchase/purchase8.jpg';
import purchase9 from '../assets/images/purchase/purchase9.jpg';

const Purchase = () => {
    return(
        <div>
            <h2 className='text-center text-4xl font-bold my-10'>Quantity Purchase </h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>METRIC TOOL BITS</p>
                <p>Minimus-Quantity: 50 </p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>SETS OF CHUCKING REAMERS</p>
                <p>Minimus-Quantity: 30</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>DRIVE PIN PUNCHES</p>
                <p>Minimus-Quantity: 60</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase4} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>BORING HEAD</p>
                <p>Minimus-Quantity: 65</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase5} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>THREADED SHANKS FOR BORING HEADS</p>
                <p>Minimus-Quantity: 35</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase6} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>DRILL SLEEVES</p>
                <p>Minimus-Quantity: 45</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase7} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>TWIST DRILL GRINDING GAGE</p>
                <p>Minimus-Quantity: 30</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase8} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>WIRE GAGE – ROUND</p>
                <p>Minimus-Quantity: 55</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase9} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <p>BORE GAGE – INCH/MM</p>
                <p>Minimus-Quantity: 60</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        
        
    );
};

export default Purchase;