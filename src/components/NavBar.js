import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import classes from './styles/NavBar.module.css';

const NavBar = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart);

  return (
    <nav className='navbar navbar-expand'>
      <div className='container-fluid'>
        <a
          className={`navbar-brand ${classes.logo}`}
          href='/'
          alt='Shopping Cart'
        >
          <img src='logo.png' alt="Let's Do Shopping" />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/products'>
                Products
              </Link>
            </li>
          </ul>
        </div>
        <button
          className={`btn btn-secondary me-2`}
          onClick={() => navigate('/cart')}
        >
          Cart:{' '}
          <span className='badge text-bg-info'>{items.totalQuantity}</span>{' '}
          Items
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
