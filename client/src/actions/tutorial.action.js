import axios from 'axios';

import { tutorialTypes } from '../constants';

export const getTutorials = tag => dispatch => {
	axios.get(`/api/tutorials/${tag}`).then(res => {
		dispatch({ type: tutorialTypes.GET_TUTORIALS, payload: res.data });
	});
};

export const submitTutorial = (tutorial, history) => dispatch => {
	axios.post('/api/tutorials', tutorial).then(res => {
		dispatch({ type: tutorialTypes.SUBMIT_TUTORIAL, payload: res.data });

		history.push('/');
	});
};
