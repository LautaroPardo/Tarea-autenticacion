import React, { useEffect, useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const AutUser = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const get = async () => {
      setData(await SessionController.autUser());
    };
    get();
  }, [data]);
  return (
    <p>{data || 'No autenticado'}</p>
  );
};

export default AutUser;
