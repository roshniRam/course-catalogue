import { authTypes } from '../constants';

import isEmpty from '../utils/isEmpty';

const initialState = {
	user: null,
	authenticated: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case authTypes.SIGN_UP:
			return {
				...state,
				user: action.payload.user,
				authenticated: !isEmpty(action.payload.user)
			};
		case authTypes.SET_CURRENT_USER:
			return {
				...state,
				user: action.payload,
				authenticated: !isEmpty(action.payload)
			};
		default:
			return state;
	}
};
