import React from 'react';
import classes from './styles/CheckoutItem.module.css';

const CheckoutItem = ({ item }) => {
  return (
    <div
      className={`d-flex border-bottom border-primary pt-3 pb-3 ${classes['checkout-item']}`}
      key={item.id}
    >
      <div
        className={`border border-primary ${classes['checkout-item__image']}`}
      >
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div
        className={`${classes['checkout-item__title']} flex-grow-1 p-2 pt-0 pb-0`}
      >
        <span>{item.name}</span>
      </div>
      <div className={`${classes['checkout-item__price']} ms-2 me-2`}>
        <span>$ {item.price}</span>
      </div>
      <div
        className={`${classes['checkout-item__quantity']} d-flex justify-content-center align-items-center ms-2 me-2`}
      >
        <span className='flex-grow-1'>{item.quantity}</span>
      </div>
      <span className={`${classes['checkout-item__totalPrice']}`}>
        $ {item.totalPrice.toFixed(2)}
      </span>
    </div>
  );
};

export default CheckoutItem;
