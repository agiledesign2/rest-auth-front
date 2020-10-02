import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import axiosInstance from '../axiosInstance';

const ResetPage = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
   
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axiosInstance.post('/rest-auth/password/reset/', {
        email: email,
      });
      //axiosInstance.defaults.headers['Authorization'] = response.data.key;
      //localStorage.setItem('access_key', response.data.key);
      //localStorage.setItem('refresh_token', response.data.refresh);
      setisLoggedIn(true);
    }catch(error){
      setisLoggedIn(false);
      throw error;
    }
  };

  return isLoggedIn ? <Redirect to="/"/> : (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-5 col-xl-4 my-5'>
          <h1>Password Reset</h1>

          <form className='login' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='id_login'>E-mail</label>
              <input
                type='email'
                name='login'
                placeholder='E-mail address'
                className='form-control'
                required=''
                value={email}
                id='id_login'
                onChange={handleEmailChange}
              />
              <div className='invalid-feedback'></div>
            </div>

            <button
              className='primaryAction btn btn-lg btn-block btn-primary mb-3'
              type='submit'
            >
              Reset
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
  );
};

export default ResetPage;
