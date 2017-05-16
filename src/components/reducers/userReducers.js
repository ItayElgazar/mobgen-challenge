export default function userReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_USER': 
            return [...state,
                Object.assign({}, action.user)
            ];
            
        case 'LOAD_USERS_SUCCESS':
            return action.users;
        
        case 'LOAD_USERS_FAILED':
        {
            return state.errors = {loadFailed: true}
        }

        case 'UPDATE_USER_SUCCESS':
        {
            return [...state.filter(user=>user.id !== action.user.id),
                    Object.assign({},action.user)
            ];
        }

        case 'DELETE_USER_SUCCESS':
        {
            return state.filter(user=> user.id !== action.user.id);
            
        }
        

        default:
            return state;
    }
    
}