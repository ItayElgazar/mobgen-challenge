import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import UsersPage from './components/user/UsersPage';
import ManageUserPage from './components/user/ManageUserPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="users" component={UsersPage} />
        <Route path="edit/:id" component={ManageUserPage} />
    </Route>
);