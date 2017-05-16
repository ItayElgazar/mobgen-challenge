
function successActionTypes(type) {
    return type.substring(type.lengh-8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state=0, action) {
    if(action.type == 'BEGIN_AJAX_CALL')
        return state + 1;
    else if(successActionTypes(action.type))
        return state -1;


    return state;
 } 