import { combineReducers } from 'redux';

import auth from './auth.reducer';
import tag from './tag.reducer';
import tutorial from './tutorial.reducer';
import error from './error.reducer';

export default combineReducers({
	auth,
	tag,
	tutorial,
	error
});
