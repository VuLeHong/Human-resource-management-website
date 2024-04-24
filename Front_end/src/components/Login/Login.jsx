import React, { useState } from 'react';
import './Login.css';
import {useNavigate } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
  const history = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function submit(e){
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login",{
        username,password
      })
      .then(res => {
        if(res.status===200){
          localStorage.setItem("user",JSON.stringify(res.data))
          //localStorage.u = res.data
          history("/profile")
        }
        else if(res.status==202){
          alert("Wrong password");
        }
        else if(res.status===204){
          alert("Not exist");
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }


  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className="input-box">
          <input type='text' placeholder='Username' required />
         
        </div>

        <div className="input-box">

          <input type="password" placeholder='Password' required />

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