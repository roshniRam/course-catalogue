import axios from 'axios';

import { tagTypes } from '../constants';

export const getTags = () => dispatch => {
	axios.get('/api/tags').then(res => {
		dispatch({ type: tagTypes.GET_TAGS, payload: res.data });
	});
};
