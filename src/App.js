import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import Login from './Layout/Auth/Login';
import Register from './Layout/Auth/Register';
import Layout from './Layout/Layout';
import * as actions from './store/actions';
import Backdrop from './components/UI/Backdrop/Backdrop';


class App extends Component {

    componentDidMount() {
        console.log('componentDidMount app');
        this.props.checkAuthState();
    }

    render() {
        let content = null;
        let backdrop = null;
        if (this.props.authStatus !== 'notAuthenticated') {
            if (this.props.location.pathname === '/auth/login' ||
                this.props.location.pathname === '/auth/register') {
                content = <Redirect to="/" />;
            } else {
                content = <Route path="/" component={Layout} />;
            }
        }
        if (this.props.authStatus === 'loading') backdrop = <Backdrop show={true} />;
        if (this.props.authStatus === 'notAuthenticated') {
            content = (
                <Switch>
                    <Route path="/auth/login" component={Login} />
                    <Route path="/auth/register" component={Register} />
                    <Redirect to="/auth/login" />
                </Switch>
            );
        }
        return (
            <Fragment>
                {backdrop}
                {content}
                <Alert stack={{ limit: 10 }} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        authStatus: state.Auth.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkAuthState: () => dispatch(actions.checkAuthState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));