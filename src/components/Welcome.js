import React from 'react';
import Card from './UI/Card';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  let welcomeText = 'You are Welcome!';

  return (
    <Card className='welcome' title={welcomeText}>
      <button
          className='btn btn-info m-2'
          onClick={() => navigate('/products')}
        >
          View Products
        </button>
    </Card>
  );
};

export default Welcome;
