import React, { PropTypes } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>

        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxStatusReducer > 0
    };
}
export default connect(mapStateToProps)(App);