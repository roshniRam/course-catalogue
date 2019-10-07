import axios from 'axios';

import { tagTypes, errorTypes } from '../constants';

export const getTags = () => dispatch => {
	axios.get('/api/tags').then(res => {
		dispatch({ type: tagTypes.GET_TAGS, payload: res.data });
	});
};

export const addTag = tag => dispatch => {
	axios
		.post('/api/tags', tag)
		.then(res => {
			dispatch({ type: tagTypes.ADD_TAG, payload: res.data });
		})
		.catch(error => {
			dispatch({ type: errorTypes.TAG_ERRORS, payload: error.response.data });
		});
};
