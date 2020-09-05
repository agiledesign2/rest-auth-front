import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BaseRouter from './Routes'
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import LogoutPage from './Pages/LogoutPage';
import SignupPage from './Pages/SignupPage';
import ResetPage from './Pages/ResetPage';
import ResetConfirmPage from './Pages/ResetConfirmPage';

function App() {
  return (
    <Router>
      <Switch>
        <BaseRouter />       
      </Switch>
    </Router>
  );
}

export default App;
