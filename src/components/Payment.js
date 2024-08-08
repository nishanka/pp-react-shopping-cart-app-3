import React from 'react';
import NavBar from './NavBar';
import classes from './styles/Payment.module.css';

const Payment = () => {
  return (
    <>
      <NavBar />
      <div
        className={`${classes['order-success']} bg-success text-white rounded pt-2 pb-2 mx-auto mt-3 d-flex flex-column justify-content-center align-items-center`}
      >
        <h2 className='m-0'>Order Success!</h2>
        <p className='text-info mt-2'>Please check your email.</p>
      </div>
    </>
  );
};

export default Payment;
