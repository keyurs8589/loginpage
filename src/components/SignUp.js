import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  let history = useHistory();
  const [newUser, setNewUser] = useState({});

  const formChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const newMember = (e) => {
    e.preventDefault();
    // condition considered as all validation are ok as of now pending validation.
    axios
      .post('http://localhost:3000/signup', newUser)
      .then((res) => {
        if (res.data.message === 'New Member successful created') {
          history.push({
            pathname: '/home',
            state: { emailUser: newUser.first_name },
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
    <div className='container mt-5 d-flex justify-content-center flex-column'>
      <form onSubmit={(e) => newMember(e)}>
        <h2>Register</h2>
        <p className='hint-text'>
          Create your account. It's free and only takes a minute.
        </p>
        <div className='form-group'>
          <div className='row'>
            <div className='col'>
              <input
                type='text'
                className='form-control'
                name='first_name'
                placeholder='First Name'
                required='required'
                onChange={formChange}
              />
            </div>
            <div className='col'>
              <input
                type='text'
                className='form-control'
                name='last_name'
                placeholder='Last Name'
                required='required'
                onChange={formChange}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='Email'
            required='required'
            onChange={formChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder='Password'
            required='required'
            onChange={formChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            name='confirm_password'
            placeholder='Confirm Password'
            required='required'
            onChange={formChange}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-success btn-lg btn-block'>
            Register Now
          </button>
        </div>
      </form>
      <div className='text-center'>
        Already have an account? <a href='/SignIn'>Sign in</a>
      </div>
    </div>
  );
};

export default SignUp;
