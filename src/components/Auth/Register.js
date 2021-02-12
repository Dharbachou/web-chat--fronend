import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import './Auth.scss';
import registerImg from '../../assets/images/register.svg'
import {register} from "../../store/actions/auth";

const Register = ({history}) => {

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
        register(
            {
              firstName,
              lastName,
              email,
              gender,
              password
            },
            history
        )
    )
    // .then(() => { history.push('/')});
  }

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
              <form onSubmit={submitForm}>
                <div className='input-field mb-1'>
                  <input
                      onChange={e => setFirstName(e.target.value)}
                      value={firstName}
                      type='text'
                      required='required'
                      placeholder='First Name'/>
                </div>
                <div className='input-field mb-1'>
                  <input
                      onChange={e => setLastName(e.target.value)}
                      value={lastName}
                      type='text'
                      required='required'
                      placeholder='Last Name'/>
                </div>
                <div className='input-field mb-1'>
                  <input
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      type='email'
                      required='required'
                      placeholder='Email'/>
                </div>

                <div className='input-field mb-1'>
                  <select
                      onChange={e => setGender(e.target.value)}
                      value={gender}
                      required='required'
                    >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
                <div className='input-field mb-2'>
                  <input
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      type='password'
                      required='required'
                      placeholder='Password'/>
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