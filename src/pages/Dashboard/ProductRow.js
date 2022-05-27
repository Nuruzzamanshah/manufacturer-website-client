import React from 'react';

const ProductRow = ({product, index}) => {
    const {name , email,products} = product;
    return (
        <tr>
        <th>{index +1}</th>
        <td>Cy Ganderton</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>Delete</td>
      </tr>
    );
};

export default ProductRow;