import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  let emailUser = location.state.emailUser;

  return (
    <div className='text-center'>
      <h2>{`Welcome ${emailUser}`}</h2>
    </div>
  );
};

export default Home;
