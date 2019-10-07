import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import { authTypes, errorTypes } from '../constants';

export const signUp = (user, history) => dispatch => {
	axios
		.post('/api/auth/register', user)
		.then(res => {
			// Save / Set token to local storage
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			// Set auth header
			setAuthToken(token);
			// Decode token to get data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));

			history.push('/');
		})
		.catch(error => {
			dispatch({ type: errorTypes.AUTH_ERRORS, payload: error.response.data });
		});
};

export const logIn = (user, history) => dispatch => {
	axios
		.post('/api/auth/login', user)
		.then(res => {
			// Save / Set token to local storage
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			// Set auth header
			setAuthToken(token);
			// Decode token to get data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));

			history.push('/');
		})
		.catch(error => {
			dispatch({ type: errorTypes.AUTH_ERRORS, payload: error.response.data });
		});
};

export const logOut = () => dispatch => {
	// Remove token from local storage
	localStorage.removeItem('jwtToken');
	// Remove auth header
	setAuthToken(false);
	// Set current user to {}
	dispatch(setCurrentUser({}));
};

export const setCurrentUser = decoded => ({
	type: authTypes.SET_CURRENT_USER,
	payload: decoded
});
