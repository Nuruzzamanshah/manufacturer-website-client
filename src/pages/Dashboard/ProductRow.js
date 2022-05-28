import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({products, index, refetch}) => {
    const {name ,product, img, email} = products;
    const handleDelete = email =>{
      fetch(`https://arcane-stream-26784.herokuapp.com/product/${email}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount){
          toast.success(`product: ${name} is deleted.`)
          refetch();
        }
      })
    }
    return (
        <tr>
        <th>{index +1}</th>
        <td><div class="avatar">
          <div class="w-16 rounded">
            <img src={img} alt="name" />
          </div>
        </div></td>
        <td>{name}</td>
        <td>{product}</td>
        <td><button onClick={() => handleDelete(email)} class="btn btn-xs btn-error">Delete</button></td>
      </tr>
    );
};

export default ProductRow;