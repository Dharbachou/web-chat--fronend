import React, {Fragment, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {logout} from '../../../../store/actions/auth';
import Modal from "../../../Modal/Modal";
import {updateProfile} from "../../../../store/actions/auth";
import './Navbar.scss'

const Navbar = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.user);
    const [showProfileOptions, setProfileOptions] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false)

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [gender, setGender] = useState(user.gender);
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');


    const submitForm = (e) => {
        e.preventDefault();

        const form = {
            firstName,
            lastName,
            email,
            gender,
            avatar
        }
        if (password.length > 0) {
            form.password = password;
        }

        const formData = new FormData()

        for (const key in form) {
            formData.append(key, form[key])
        }

        //dispatch action
        dispatch(updateProfile(formData)).then(() => {
            setShowProfileModal(false);
        })
    }

    return (
        <div id='navbar'>
            <h2>Chat.io</h2>
            <div id='profile-menu' onClick={() => setProfileOptions(!showProfileOptions)}>
                <img src={user.avatar} alt='Avatar'/>
                <p>{user.firstName} {user.lastName}</p>
                <FontAwesomeIcon icon='caret-down' className='fa-icon'/>

                {showProfileOptions &&
                <div id='profile-options'>
                    <p
                        onClick={() => setShowProfileModal(true)}
                    >
                        Update profile
                    </p>
                    <p
                        onClick={() => {
                            dispatch(logout())
                        }}
                    >
                        Log out
                    </p>
                </div>
                }

                {
                    showProfileModal &&
                    <Modal click={() => setShowProfileModal(false)}>
                        <Fragment key='header'>
                            <h3 className='m-0'>Update profile</h3>
                        </Fragment>
                        <Fragment key='body'>
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
                                <div className='input-field mb-2'>
                                    <input
                                        onChange={e => setAvatar(e.target.files[0])}
                                        value={password}
                                        type='file'/>
                                </div>
                            </form>
                        </Fragment>
                        <Fragment key='footer'>
                            <button
                                onClick={submitForm}
                                className='btn-success'
                            >
                                UPADATE
                            </button>
                        </Fragment>
                    </Modal>
                }
            </div>
        </div>
    );
};

export default Navbar;