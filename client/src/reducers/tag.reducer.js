import { tagTypes } from '../constants';

const initialState = {
	tags: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case tagTypes.GET_TAGS:
			return {
				...state,
				tags: action.payload.tags
			};
		default:
			return state;
	}
};
