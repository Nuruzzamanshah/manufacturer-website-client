import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({products, index, refetch}) => {
    const {name ,product, img, email} = products;
    const handleDelete = email =>{
      fetch(`http://localhost:5000/product/${email}`, {
        method: 'DELETE',
        headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
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
        <td><div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt="name" />
          </div>
        </div></td>
        <td>{name}</td>
        <td>{product}</td>
        <td><button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">Delete</button></td>
      </tr>
    );
};

export default ProductRow;