
import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const UserForm = ({user,state,onSave,onDelete,onChange}) =>{
    return(
        <div>
        <div className="form-group">
            <input type="text" className="form-control"
            placeholder="First name"
            name="firstname"
            value={user.firstname || ''}
            onChange={onChange}
            />
        </div>

        <div className="form-group">
            <input type="text" className="form-control"
            placeholder="Last name"
            name="lastname"
            value={user.lastname || ''}
            onChange={onChange}
            />
        </div>

        <div className="form-group">
            <input type="text" className="form-control"
            placeholder="Role"
            name="role"
            value={user.role || ''}
            onChange={onChange}
            />
        </div>

        <div className="row-fluid" style={{marginTop:'1em'}}>      
            <button type="submit" onClick={onSave} className="btn btn-primary">Save</button>
            <button type="submit" onClick={onDelete} className="btn btn-danger pull-right">Delete user</button>
        </div>

       
        </div>
    );
};

UserForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    state: React.PropTypes.func.isRequired
};

export default UserForm;
