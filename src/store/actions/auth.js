import AuthService from '../../services/authService';
import {LOGOUT, LOGIN, UPDATE_PROFILE, REGISTER} from "../types";

export const login = (params, history) => dispatch => {
    return AuthService.login(params).then(data => {
        dispatch({
            type: LOGIN,
            payload: data
        });
        history.push('/');
    }).catch(err => {

    });
};

export const register = (params, history) => dispatch => {
    return AuthService.register(params).then(data => {
        dispatch({
            type: REGISTER,
            payload: data
        });
        history.push('/');
    }).catch(err => {

    });
};

export const logout = () => dispatch => {
    AuthService.logout();
    dispatch({type: LOGOUT});
};

export const updateProfile = (params) => dispatch => {
    return AuthService.updateProfile(params)
        .then(data => {
            dispatch({
                type: UPDATE_PROFILE,
                payload: data
            });
        }).catch(err => {

        });
}

