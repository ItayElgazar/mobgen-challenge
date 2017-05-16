import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Test</h1>
                <p>My first react experience is here!</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <Link to="about" className="btn btn-primary btn-lg">About me</Link>
            </div>

        );
    }
}

export default HomePage;