import React,{PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
    return(
        <div>
        <h1>First react-redux Projects</h1>
<nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
            {" | "}
           <Link to="users" activeClassName="active">Users</Link>
          </div>
        </div>
      </nav>

       
        </div>
    );
};

export default Header;