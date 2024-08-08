import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import NavBar from './NavBar';

// const productsURL =
//   'https://my-json-server.typicode.com/nishanka/data/products';

const productsURL = 'https://fakestoreapi.com/products';

const Products = () => {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    let response = await axios(productsURL);
    let products = response.data;
    setProducts(products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className='products'>
        <h1 className='text-center'>Products</h1>
        <div className='container-fluid'>
          <div className='product-list d-inline-flex align-content-stretch flex-wrap'>
            {products.map((product, index) => (
              <Product key={index} item={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
