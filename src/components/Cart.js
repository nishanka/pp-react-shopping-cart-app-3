import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './styles/Cart.module.css';
import CartItem from './CartItem';
import NavBar from './NavBar';

const Cart = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const cartProducts = cartData.itemList;
  const cartIsEmpty = cartData.totalQuantity === 0 ? true : false;

  return (
    <>
      <NavBar />
      <div
        className={`${classes.cart} border border-2 rounded border-primary bg-light p-4 mx-auto mt-3 mb-3`}
      >
        <div className={`${classes['cart-header']} text-center p-2 pt-0`}>
          <h3>Your Cart</h3>
          <button
            className={`${classes['cart-close']} btn btn-primary p-0`}
            onClick={() => navigate('/products')}
          >
            x
          </button>
        </div>
        {cartIsEmpty && (
          <div className='alert alert-danger text-center' role='alert'>
            Your Cart Is Empty.
          </div>
        )}
        {!cartIsEmpty && (
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
            {cartProducts.map((item) => (
              <CartItem key={item.id} id={item.id} item={item} />
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
        )}

        {!cartIsEmpty && (
          <div className='cart-footer d-flex justify-content-end'>
            <button
              className='btn btn-primary me-2'
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </button>
            <button
              className='btn btn-success'
              onClick={() => navigate('/checkout')}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
