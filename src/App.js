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


class App extends Component {

    redirectPath = '/';

    componentDidMount() {
        // this.redirectPath = this.props.location.pathname;
        // console.log(this.redirectPath);
        this.props.checkAuthState();
    }

    componentDidUpdate() {
        // this.redirectPath = this.props.location.pathname;
        // this.props.checkAuthState();
        console.log('componentDidUpdate: ', this.props.location)
        // console.log('DidUpdateAgain: ', this.redirectPath)
    }

    render() {
        let content = null;
        if (this.props.authStatus === 'authenticated') {
            content = (
                <Switch>
                    <Route path="/" component={Layout} />
                    {/* <Redirect to={this.redirectPath} /> */}
                </Switch>
            );
        }
        if (this.props.authStatus === 'notAuthenticated') {
            content = (
                <Switch>
                    <Route path="/auth/login" component={Login} />
                    <Route path="/auth/register" component={Register} />
                    <Redirect to="/auth/login" />
                </Switch>
            )
        }
        return (
            <Fragment>
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