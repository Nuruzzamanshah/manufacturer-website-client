import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect( ()=>{
    if(user){
      fetch(`http://localhost:5000/booking?userEmail=${user.email}`, {
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
      </tr>
    </thead>
    <tbody>
      {
        orders.map( (o, index) =><tr>
          <th>{index+1}</th>
          <td>{o.userName}</td>
          <td>{o.date}</td>
          <td>{o.purchase}</td>
        </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrders;