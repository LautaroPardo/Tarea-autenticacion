import React, { useEffect } from 'react';
import SessionController from '../networking/controllers/SessionController';

const RefreshToken = () => {
  useEffect(() => {
    SessionController.refreshtoken();
  }, []);
  return (
    <h1>Token refrescado pa</h1>
  );
};

export default RefreshToken;
