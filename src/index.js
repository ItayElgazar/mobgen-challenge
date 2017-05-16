import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import storeConfig from './components/store/storeConfig';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {loadUsers} from './components/actions/userActions';
import routes from './routes';
import './styles/styles.css'; // CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = storeConfig();
store.dispatch(loadUsers());
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
); 