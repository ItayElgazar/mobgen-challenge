import React,{PropTypes,contextTypes} from 'react';
import * as userActions from '../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserForm from './UserForm';
import toastr from 'toastr';

class ManageUserPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: Object.assign({}, this.props.user),
            errors: {}
        };

        this.updateUserState = this.updateUserState.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    
    componentWillReceiveProps(nextProps) {
        if(this.props.user.id != nextProps.user.id) {
            this.setState({user: Object.assign({}, nextProps.user)});
        }
    }

    updateUserState(event) {
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user: user});
    }

    saveUser(event) {
        event.preventDefault();
        this.props.actions.saveUser(this.state.user);
        this.context.router.push("/users");
        toastr.success('User saved');
    }
    
    deleteUser(event) {
        event.preventDefault();
        this.props.actions.deleteUser(this.state.user);
        this.context.router.push("/users");
        toastr.success('User deleted');
    }
    
    render() {
        const {user} = this.props;
        return(
            <div>
                
                <div className="col-lg-8">
                    <h1>Edit user - {user.firstname}</h1>
                    <UserForm
                        user={this.state.user}
                        onSave={this.saveUser}
                        onDelete={this.deleteUser}
                        onChange={this.updateUserState} />
                </div>
               
            </div>
        );
    }
}

ManageUserPage.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageUserPage.contextTypes = {
    router: PropTypes.object
};

function getUserById(users, userId) {
    const user = users.filter(user=> user.id == userId);
    if(user) return user[0];

    return null;
}

function mapStateToProps(state, ownProps) {
    const userId = ownProps.params.id;
    let user = {id: null, firstname: null, lastname: null, role: null};

    if(userId && state.users.length > 0) {
        user = getUserById(state.users, userId);
    }
    return {
        user: user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);