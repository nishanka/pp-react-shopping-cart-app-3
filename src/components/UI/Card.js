import React from 'react';

const Card = ({ children, className, title }) => {
  return (
    <div
      className={`mx-auto d-flex align-items-center justify-content-center card-${className}`}
    >
      <div className='bg-dark rounded p-4 text-white text-center card-inner'>
        <h3 className='mb-4'>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
