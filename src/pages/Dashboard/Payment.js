import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from './../Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4NqdHK6kb7C9UAuUZtk8nTW1P4H5qfqXXMZtJyDr5cjgoyC0x327Jw7lPv4uvFk5KM4ieqY7lD0Q2ux5qrbyqL00hhpOUrqN');

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`
    const { data: product, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
                <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">{product.purchase}</h2>
                    <p>Please pay for: ${product.price}</p>
                </div>
        </div>
    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
      <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
      </div>
    </div>
        </div>
    );
};

export default Payment;