import React from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import classes from './styles/Cart.module.css';
import { useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import ShippingDetailsForm from './ShippingDetailsForm';

const ShippingDetails = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const items = cartData.itemList;

  return (
    <>
      <NavBar />
      <div
        className={`${classes.cart} border border-2 rounded border-primary bg-light p-4 mx-auto mt-3 mb-3`}
      >
        <div className={`${classes['cart-header']} text-center p-2 pt-0`}>
          <h3>Your Order</h3>
        </div>
        <div className='cart-items'>
          <div
            className={`cart-items__header d-flex border-bottom border-primary pb-3 text-primary fw-bold`}
          >
            <span className={`${classes['cart-items-header__image']}`}>
              Image
            </span>
            <span
              className={`${classes['cart-items-header__title']} flex-grow-1 p-2 pt-0 pb-0`}
            >
              Title
            </span>
            <span
              className={`${classes['cart-items-header__price']} ms-2 me-2`}
            >
              Price
            </span>
            <span
              className={`${classes['cart-items-header__quantity']} d-flex justify-content-center align-items-center ms-3 me-3`}
            >
              Qty
            </span>
            <span className={`${classes['cart-item-header__totalPrice']}`}>
              Total
            </span>
          </div>
          {items.map((item) => (
            <CheckoutItem key={item.id} id={item.id} item={item} />
          ))}
          <div className='cart-summary pt-3 pb-3 fw-bold'>
            <div className='cart-summary__item d-flex'>
              <span
                className={`${classes['cart-summary__label']} flex-grow-1 text-right`}
              >
                Total Items:
              </span>
              <span className={classes['cart-summary__value']}>
                {cartData.totalQuantity}
              </span>
            </div>
            <div className='cart-summary__item d-flex'>
              <span
                className={`${classes['cart-summary__label']} flex-grow-1 text-right`}
              >
                Total Amount:
              </span>
              <span className={classes['cart-summary__value']}>
                $ {cartData.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className='shipping alert alert-info'>
          <h5>Shipping Details</h5>
          <ShippingDetailsForm />
        </div>
        <div className='cart-footer d-flex justify-content-end'>
          <button
            className='btn btn-primary me-2'
            onClick={() => navigate('/checkout')}
          >
            Back to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
