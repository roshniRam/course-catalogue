import { combineReducers } from 'redux';

import user from './user.reducer';
import tag from './tag.reducer';
import tutorial from './tutorial.reducer';

export default combineReducers({
	user,
	tag,
	tutorial
});
