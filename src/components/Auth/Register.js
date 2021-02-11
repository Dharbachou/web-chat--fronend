import React from 'react';
import {Link} from "react-router-dom";

import './Auth.scss';
import registerImg from '../../assets/images/register.svg'

const Register = () => {
  return (
      <div id='auth-container'>
        <div id='auth-card'>
          <div className='card-shadow'>
            <div id='image-section'>
              <img src={registerImg} alt='Register' />
            </div>
            <div id='form-section'>
              <h2>
                Create an account
              </h2>
              <form>
                <div className='input-field mb-1'>
                  <input placeholder='First Name'/>
                </div>
                <div className='input-field mb-1'>
                  <input placeholder='Last Name'/>
                </div>
                <div className='input-field mb-1'>
                  <input placeholder='Email'/>
                </div>

                <div className='input-field mb-1'>
                  <select>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
                <div className='input-field mb-2'>
                  <input placeholder='Password'/>
                </div>
                <button>Register</button>
                <p> Already have an account?
                  <Link to='/login'>Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Register;