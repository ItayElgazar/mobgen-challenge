import React,{PropTypes} from 'react';
import * as userActions from '../actions/userActions';
import {connect} from 'react-redux';
import UsersList from './UsersList';

class UsersPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    
    userRow(user, index) {
        return( <div key={index}> {user.firstname} {user.lastname} </div> );
    }


    render() {
        const {users} = this.props;
        return(
            <div>
                <h1>Users</h1>
                <UsersList users={users} />

               <div className="row-fluid" style={{marginTop:'1em'}}>
        
                <button type="submit" className="btn btn-primary">Add User</button>
           
            </div>

            </div>
        );
    }
}

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    createUser: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createUser: user=> dispatch(userActions.createUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);