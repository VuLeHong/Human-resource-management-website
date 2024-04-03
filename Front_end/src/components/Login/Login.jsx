import React, { useState } from 'react';
import './App.css';
import { Navigate } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className="input-box">
          <input type='text' placeholder='Username' required />
         
        </div>

        <div className="input-box">
          <input type="password" placeholder='Passwork' required />
        </div>

        <div className='remember-forgot'>
          <label>
            <input type='checkbox'/> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <div>
        <button type='submit' className='btn'>Login</button>
        </div>

        <div className='register-link'>
          <p>Don't have an account?
            <a href="#"> Register</a>
          </p>
        </div>
      </form>

    </div>
    
  );
};

export default LoginForm