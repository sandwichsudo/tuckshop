import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import UserApi from '../../api/user-api';
// Components
import Header from '../header/Header.js';
var firebase = require('firebase/app');

class MainLayout extends Component {
    componentDidMount() {
        UserApi.onAuth();
    }

    componentWillUnmount() {
        if (this.firebaseRef) {
            this.firebaseRef.off();
        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                {this.props.user.email && <nav className="primary-aside">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalogue">Catalogue</Link></li>
                  </ul>
                </nav>}
                <main className="main-container">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
  return {
    user: store.userReducer.user
  };
}

export default connect(mapStateToProps)(MainLayout);
