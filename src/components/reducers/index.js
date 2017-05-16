import {combineReducers} from 'redux';
import users from './userReducers';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
    users,
    ajaxStatusReducer
});

export default rootReducer;