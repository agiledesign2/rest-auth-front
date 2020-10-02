import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import axiosInstance from '../axiosInstance';

const LogoutPage = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true)

  useEffect(() => {
   
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axiosInstance.post('/rest-auth/logout/', {});
      //axiosInstance.defaults.headers['Authorization'] = response.data.key;
      localStorage.removeItem('access_key');
      //localStorage.setItem('refresh_token', response.data.refresh);
      setisLoggedIn(false);
    }catch(error){
      setisLoggedIn(false);
      throw error;
    }
  };

  return isLoggedIn ? (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-5 col-xl-4 my-5'>
          <h1>Sign Out</h1>
          <h4>Are you sure you want to sign out?</h4>

          <form className='login' onSubmit={handleSubmit}>
            <button
              className='primaryAction btn btn-lg btn-block btn-primary mb-3'
              type='submit'
            >
              Sign Out
            </button>
            <div className='text-center'>
              <small className='text-muted text-center'>
                Go back home?{' '}
                <a href='/'>Home </a>.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : <Redirect to="/"/>;
};

export default LogoutPage;
