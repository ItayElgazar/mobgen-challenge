import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) =>{

    return(
        <tr>
            <td><Link to={`edit/${user.id}`}>{user.firstname}</Link></td>
            <td>{user.lastname}</td>
            <td>{user.role}</td>
        </tr>
    );
};

UserListRow.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListRow;