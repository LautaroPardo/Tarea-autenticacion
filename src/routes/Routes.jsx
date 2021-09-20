import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RefreshToken from '../pages/RefreshToken';
import NavRouter from './NavRouter';
import AutUser from '../pages/AutUser';

const Routes = () => (
  <Switch>
    <NavRouter path="/about">
      <About />
    </NavRouter>
    <NavRouter path="/login">
      <Login />
    </NavRouter>
    <NavRouter path="/register">
      <Register />
    </NavRouter>
    <NavRouter path="/refreshtoken">
      <RefreshToken />
    </NavRouter>
    <NavRouter path="/autuser">
      <AutUser />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
