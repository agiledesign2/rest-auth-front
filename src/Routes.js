import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import LogoutPage from './Pages/LogoutPage';
import SignupPage from './Pages/SignupPage';
import ResetPage from './Pages/ResetPage';
import ResetConfirmPage from './Pages/ResetConfirmPage';
import { authCheckState } from './axiosInstance';

function BaseRouter({location}) {
  const token = authCheckState();

  let isLoggedIn;

  if(location.state){
    isLoggedIn = location.state.isLoggedIn;
    console.log(isLoggedIn);
  }else{
    isLoggedIn = false;
    console.log(isLoggedIn);
  }
  /*const value=queryString.parse(search);
  console.log('token',value.casa)//123
  */

  return (
    <>
      <Route exact path='/'>
        <HomePage token={token} isLoggedIn={isLoggedIn} />
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
