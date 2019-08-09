import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import { authTypes } from '../constants';

export const signUp = user => dispatch => {
	axios.post('/api/auth/register', user).then(res => {
		// Save / Set token to local storage
		const { token } = res.data;
		localStorage.setItem('jwtToken', token);
		// Set auth header
		setAuthToken(token);
		// Decode token to get data
		const decoded = jwt_decode(token);
		// Set current user
		dispatch(setCurrentUser(decoded));
	});
};

export const logIn = user => dispatch => {
	axios.post('/api/auth/login', user).then(res => {
		// Save / Set token to local storage
		const { token } = res.data;
		localStorage.setItem('jwtToken', token);
		// Set auth header
		setAuthToken(token);
		// Decode token to get data
		const decoded = jwt_decode(token);
		// Set current user
		dispatch(setCurrentUser(decoded));
	});
};

export const logOut = () => dispatch => {
	// Remove token from local storage
	localStorage.removeItem('jwtToken');
	// Remove auth header
	setAuthToken(false);
	// Set current user to {}
	dispatch(setCurrentUser({}));
	window.location.href = '/';
};

export const setCurrentUser = decoded => ({
	type: authTypes.SET_CURRENT_USER,
	payload: decoded
});
