import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const {data: product, isLoading, refetch} = useQuery('product', () => fetch('https://arcane-stream-26784.herokuapp.com/product',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-primary'>Manage Products:{product.length}</h2>
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
          product.map((products, index) =><ProductRow
          key={products._id}
          products={products}
          index={index}
          refetch={refetch}
          ></ProductRow>)
      }


    </tbody>
  </table>
</div>
{
  
}
</div>
    );
};

export default ManageProduct;

