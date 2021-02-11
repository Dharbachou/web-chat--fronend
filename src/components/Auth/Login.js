import React, {useState} from 'react';
import {Link} from "react-router-dom";
import AuthService from '../../services/authService';
import './Auth.scss';
import loginImg from '../../assets/images/login.svg'


const Login = () => {

    const [email, setEmail] = useState('john.doe@gmail.com');
    const [password, setPassword] = useState('secret');

    const submitForm = (e) => {
        e.preventDefault();


        AuthService.login({
            email,
            password
        }).then(res => {
            console.log(res);
        });

        console.log([email, password])
    }

    return (
      <div id='auth-container'>
          <div id='auth-card'>
            <div className='card-shadow'>
                <div id='image-section'>
                    <img src={loginImg} alt='Login' />
                </div>
                <div id='form-section'>
                    <h2>
                        Welcome back
                    </h2>
                    <form onSubmit={submitForm}>
                        <div className='input-field mb-1'>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                required='required'
                                type='email'
                                placeholder='Email'/>
                        </div>
                        <div className='input-field mb-2'>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                required='required'
                                type='password'
                                placeholder='Password'/>
                        </div>
                        <button>Login</button>
                        <p> Don't have an account?
                            <Link to='/register'>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
          </div>
      </div>
    );
};

export  default Login;