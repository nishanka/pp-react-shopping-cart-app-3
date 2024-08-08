import React, { useEffect, useState } from 'react';
import classes from './styles/ShippingDetailsForm.module.css';
import { useNavigate } from 'react-router-dom';

const ShippingDetailsForm = () => {
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    localStorage.setItem('shippingData', JSON.stringify(shippingData));
  }, [shippingData]);

  // console.log(currentCustomerData.firstName);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prevData) => {
      return { ...prevData, [name]: value };
    });
    // localStorage.setItem('shippingData', JSON.stringify(shippingData));
  };

  const handleShippingData = (e) => {
    e.preventDefault();
    if (e.target.confirmDetails.checked === true) {
      setErrMessage('');
      localStorage.setItem('shippingData', JSON.stringify(shippingData));
      navigate('/order');
    } else {
      setErrMessage('Please Confirm your details!');
    }
  };

  return (
    <div className={`shipping-details`}>
      <form onSubmit={handleShippingData} className={`${classes['form']}`}>
        <div
          className={`shipping-first-name ${classes['data-field--small']} mb-2`}
        >
          <input
            type='text'
            placeholder='First Name'
            className='form-control'
            name='firstName'
            defaultValue={shippingData.firstName}
            required
            onChange={handleChange}
          />
        </div>
        <div
          className={`shipping-last-name ${classes['data-field--small']} mb-2`}
        >
          <input
            type='text'
            placeholder='Last Name'
            className='form-control'
            name='lastName'
            defaultValue={shippingData.lastName}
            required
            onChange={handleChange}
          />
        </div>
        <div
          className={`shipping-address-line-1 ${classes['data-field--small']} mb-2`}
        >
          <input
            type='text'
            placeholder='Address Line 1'
            className='form-control'
            name='addressLine1'
            defaultValue={shippingData.addressLine1}
            required
            onChange={handleChange}
          />
        </div>
        <div
          className={`shipping-address-line-2 ${classes['data-field--small']} mb-2`}
        >
          <input
            type='text'
            placeholder='Address Line 2'
            className='form-control'
            name='addressLine2'
            defaultValue={shippingData.addressLine2}
            onChange={handleChange}
          />
        </div>
        <div className={`shipping-city ${classes['data-field--small']} mb-2`}>
          <input
            type='text'
            placeholder='City'
            className='form-control'
            name='city'
            defaultValue={shippingData.city}
            onChange={handleChange}
          />
        </div>
        <div
          className={`shipping-country ${classes['data-field--small']} mb-2`}
        >
          <input
            type='text'
            placeholder='Country'
            className='form-control'
            name='country'
            defaultValue={shippingData.country}
            onChange={handleChange}
          />
        </div>
        <div className={`shipping-email ${classes['data-field--small']} mb-2`}>
          <input
            type='email'
            placeholder='Email'
            className='form-control'
            defaultValue={shippingData.email}
            name='email'
            onChange={handleChange}
          />
        </div>
        <div
          className={`shipping-telephone ${classes['data-field--small']} mb-2`}
        >
          <input
            type='text'
            placeholder='Telephone'
            className='form-control'
            name='telephone'
            defaultValue={shippingData.telephone}
            required
            onChange={handleChange}
          />
        </div>
        <div className={`form-check ${classes['data-field--full']} mt-3 mb-3`}>
          <input
            type='checkbox'
            className={`form-check-input ${errMessage ? classes['error'] : ''}`}
            id='ConfirmShippingDetails'
            name='confirmDetails'
            onChange={handleChange}
          />
          <label
            className='form-check-label text-primary fw-medium'
            htmlFor='ConfirmShippingDetails'
          >
            My shipping details are correct.
          </label>
          {errMessage && (
            <div className={`text-danger ${classes['error-message']}`}>
              {errMessage}
            </div>
          )}
        </div>
        <button className='btn btn-primary btn-sm'>
          Save Shipping Details
        </button>
      </form>
    </div>
  );
};

export default ShippingDetailsForm;
