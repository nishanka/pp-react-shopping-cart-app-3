import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import ShippingDetails from './components/ShippingDetails';
import Order from './components/Order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/shipping-details' element={<ShippingDetails />} />
        <Route path='/order' element={<Order />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
