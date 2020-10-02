import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import axiosInstance from '../axiosInstance';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
   
  });

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axiosInstance.post('/rest-auth/registration/', {
        username: username,
        email: email,
        password1: password1,
        password2: password2
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
            <div className='form-group'>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='id_password1'>Password1</label>
                </div>
              </div>
              <div className='input-group input-group-merge'>
                <input
                  type='password1'
                  name='password1'
                  placeholder='Password1'
                  className='form-control form-control-appended'
                  required=''
                  value={password1}
                  id='id_password1'
                  onChange={handlePassword1Change}
                />
                <div className='input-group-append'>
                  <span className='input-group-text'>
                    <i className='fe fe-eye'></i>
                  </span>
                </div>
              </div>
            </div>
            <div className='form-group'>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='id_password2'>Password2</label>
                </div>
              </div>
              <div className='input-group input-group-merge'>
                <input
                  type='password2'
                  name='password2'
                  placeholder='Password2'
                  className='form-control form-control-appended'
                  required=''
                  value={password2}
                  id='id_password2'
                  onChange={handlePassword2Change}
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
                Already have an account?{' '}
                <a href='/login/'>Login </a>.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
