import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const {data: products, isLoading} = useQuery('products', () => fetch('http://localhost:5000/product',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-primary'>Manage Products:{products.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>avator</th>
        <th>Name</th>
        <th>product</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
          products.map((product, index) =><ProductRow
          key={product._id}
          product={product}
          index={index}
          ></ProductRow>)
      }


    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageProduct;