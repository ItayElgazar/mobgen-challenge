import React,{PropTypes} from 'react';
import UserListRow from './UserListRow';

const UsersList = ({users}) => {
    return(
        <table className="table">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last name</th>
                <th>Role</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user=>
                <UserListRow key={user.id} user={user} /> 
            )}
            </tbody>
            </table>

    );
};
UsersList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UsersList;