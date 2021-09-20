import React, { useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SessionController.register(username, password, email);
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
