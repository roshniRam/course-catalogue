import { tutorialTypes } from '../constants';

const initialState = {
	tutorials: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case tutorialTypes.GET_TUTORIALS:
			return {
				...state,
				tutorials: action.payload.tutorials
			};
		default:
			return state;
	}
};
