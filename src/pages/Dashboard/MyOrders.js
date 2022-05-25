import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState();
    const [user] = useAuthState(auth);

    useEffect( () =>{
        if(user){
        fetch(`http://localhost:5000/booking?userName=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        }
    },[user])
    return (
        <div>
            <h2>My Orders:{orders}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Orders</th>
      </tr>
    </thead>
    <tbody>
        {/* {
            orders.map(o =><tr>
                <th>1</th>
                <td></td>
                <td>Quality Control Specialist</td>
              </tr>)
        } */}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;