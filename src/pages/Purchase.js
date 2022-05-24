import React from 'react';

const Purchase = ({items, setBooking}) => {
    const {name,picture, minimusguantity} = items;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>
      {
        minimusguantity.lenght > 0
        ? <span>{minimusguantity[0]}</span>
        :<span></span>

      }
    </p>
    <p>Minimus-Quantity:{minimusguantity}</p>
    <div className="card-actions">
      <label for="booking-modal" onClick={() => setBooking(items)} class="btn btn-primary">Buy Now</label>
    </div>
  </div>
</div>
    );
};

export default Purchase;