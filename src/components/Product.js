import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cart-slice';

const Product = ({ item }) => {
  const dispatchFn = useDispatch();

  const onAddToCart = (item) => {
    dispatchFn(add(item));
    // console.log(`Add Item ${item.id} to Cart...`);
  };

  return (
    <div className='product col col-3 p-3 d-flex'>
      <div className='card flex-grow-1 d-flex'>
        <div className='card-image card-image-top p-3 text-center flex-grow-1 d-flex justify-content-center align-items-center'>
          <img src={item.image} className='product-image' alt={item.title} />
        </div>
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{item.title}</h5>
          <p className='card-text'>$ {item.price}</p>
          <p className='visually-hidden'>{item.category}</p>
          <p className='visually-hidden'>{item.description}</p>
          <button
            className='btn btn-primary mt-auto me-auto'
            onClick={() => onAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
