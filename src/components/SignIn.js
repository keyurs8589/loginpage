import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  let history = useHistory();
  let email = '';
  let password = '';

  const formChange = (e) => {
    if (e.target.id === 'email') {
      email = e.target.value;
    } else {
      password = e.target.value;
    }
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/login', { email, password })
      .then((res) => {
        if (res.data.message === 'successful login') {
          history.push({
            pathname: '/home',
            state: { emailUser: email },
          });
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container mt-5 d-flex justify-content-center'>
      <form onSubmit={(e) => login(e)}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            onChange={formChange}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            onChange={formChange}
          />
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
