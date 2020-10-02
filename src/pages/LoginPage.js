import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import axiosInstance from '../axiosInstance';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
   
  });

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axiosInstance.post('/rest-auth/login/', {
        username: 'username',
        password: password
      });
      axiosInstance.defaults.headers['Authorization'] = response.data.key;
      localStorage.setItem('access_key', response.data.key);
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
          <h1>Sign In</h1>

          <form className='login' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='id_username'>Username</label>
              <input
                type='text'
                name='username'
                placeholder='User name'
                className='form-control'
                required=''
                value={username}
                id='id_login'
                onChange={handleUserChange}
              />
              <div className='invalid-feedback'></div>
            </div>
            <div className='form-group'>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='id_password'>Password</label>
                </div>
                <div className='col-auto'>
                  <a
                    href='/accounts/password/reset/'
                    className='form-text small text-muted'
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className='input-group input-group-merge'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='form-control form-control-appended'
                  required=''
                  value={password}
                  id='id_password'
                  onChange={handlePasswordChange}
                />
                <div className='input-group-append'>
                  <span className='input-group-text'>
                    <i className='fe fe-eye'></i>
                  </span>
                </div>
              </div>
            </div>

            <button
              className='primaryAction btn btn-lg btn-block btn-primary mb-3'
              type='submit'
            >
              Sign In
            </button>
            <div className='text-center'>
              <small className='text-muted text-center'>
                Don"t have an account yet?{' '}
                <a href='/signup/'>Sign up </a>.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
