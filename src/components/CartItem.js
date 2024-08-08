import React from 'react';
import { useDispatch } from 'react-redux';
import { add, remove } from '../store/cart-slice';
import classes from './styles/CartItem.module.css';

const CartItem = ({ item }) => {
  const dispatchFn = useDispatch();

  const onIncrementItem = (item) => {
    dispatchFn(add(item));
    console.log('Increment cart Item...');
  };

  const onDecrementItem = (item) => {
    dispatchFn(remove(item));
    console.log('Decrement cart Item...');
  };

  return (
    <div
      className={`d-flex border-bottom border-primary pt-3 pb-3 ${classes['cart-item']}`}
      key={item.id}
    >
      <div className={`border border-primary ${classes['cart-item__image']}`}>
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div
        className={`${classes['cart-item__title']} flex-grow-1 p-2 pt-0 pb-0`}
      >
        <span>{item.name}</span>
      </div>
      <div className={`${classes['cart-item__price']} ms-2 me-2`}>
        <span>$ {item.price.toFixed(2)}</span>
      </div>
      <div
        className={`${classes['cart-item__quantity']} d-flex justify-content-center align-items-center ms-2 me-2`}
      >
        <button
          className='btn btn-dark d-flex justify-content-center align-items-center'
          onClick={() => onDecrementItem(item)}
        >
          <span>-</span>
        </button>
        <span className='flex-grow-1'>{item.quantity}</span>
        <button
          className='btn btn-dark d-flex justify-content-center align-items-center'
          onClick={() => onIncrementItem(item)}
        >
          <span>+</span>
        </button>
      </div>
      <span className={`${classes['cart-item__totalPrice']}`}>
        $ {item.totalPrice.toFixed(2)}
      </span>
    </div>
  );
};

export default CartItem;
