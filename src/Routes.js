import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import LogoutPage from './Pages/LogoutPage';
import SignupPage from './Pages/SignupPage';
import ResetPage from './Pages/ResetPage';
import ResetConfirmPage from './Pages/ResetConfirmPage';
import { authCheckState } from './axiosInstance';

function BaseRouter() {
  const token = authCheckState();

  return (
    <>
      <Route exact path='/'>
        <HomePage token={token} />
      </Route>

      <Route path='/login'>
        <LoginPage dir={'login'} />
      </Route>

      <Route path='/logout'>
        <LogoutPage/>
      </Route>

      <Route path='/signup'>
        <SignupPage/>
      </Route>

      <Route path='/reset'>
        <ResetPage/>
      </Route>

      <Route path='/confirm'>
        <ResetConfirmPage token={token} />
      </Route>        
    </>
  );
}

export default BaseRouter;
