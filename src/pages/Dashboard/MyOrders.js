import React, { useEffect, useState } from 'react';
import { Button } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect( ()=>{
    if(user){
      fetch(`https://arcane-stream-26784.herokuapp.com/booking?userEmail=${user.email}`, {
        method: 'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
    .then(res=>res.json())
    .then(data => setOrders(data))
    }
  },[user])

  return (
    <div>
      <h2>My Orders: {orders.length}</h2>
      <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Purchase</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map( (o, index) =><tr>
          <th>{index+1}</th>
          <td>{o.userName}</td>
          <td>{o.date}</td>
          <td>{o.purchase}</td>

          {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(o.price && o.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{o.transactionId}</span></p>
                                    </div>}
        </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrders;