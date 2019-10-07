import { errorTypes } from '../constants';

const initialState = {
	authErrors: null,
	tagErrors: null,
	tutorialErrors: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case errorTypes.AUTH_ERRORS:
			return {
				...state,
				authErrors: action.payload.errors
			};
		case errorTypes.TUTORIAL_ERRORS:
			return {
				...state,
				tutorialErrors: action.payload.errors
			};
		case errorTypes.TAG_ERRORS:
			return {
				...state,
				tagErrors: action.payload.errors
			};
		case errorTypes.CLEAR_ERRORS:
			return initialState;
		default:
			return state;
	}
};
