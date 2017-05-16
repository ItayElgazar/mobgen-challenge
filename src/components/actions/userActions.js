import apiUrl from '../../api/apiConfig';
import {beginAjaxCall} from './ajaxStatusActions';

export function createUser(user) {
    return {type: 'CREATE_USER', user};
}

export function loadUsersSuccess(users)  {
    return {type: 'LOAD_USERS_SUCCESS', users};
}

export function loadUsersFailed(caseMessage) {
    return {type: 'LOAD_USERS_FAILED', caseMessage};
}

export function saveUser(user) {
    return {type: 'UPDATE_USER_SUCCESS', user};
}

export function deleteUser(user) {
    return {type: 'DELETE_USER_SUCCESS', user};
}

export function loadUsers() {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((users) => dispatch(loadUsersSuccess(users)))
            .catch(err=>{
                dispatch(loadUsersFailed('Failed to load users'));    
            });
    };
}