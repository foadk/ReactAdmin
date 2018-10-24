import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../../routes';

class Content extends Component {
    render() {
        const generatedRoutes = routes.map(route => {
            return <Route
                key={route.name}
                path={route.path}
                component={route.component}
                exact={route.exact === true ? true : false} />
        });
        return (
            <div className="container-fluid">
                <div className="animated fadeIn">
                    {'authenticated' === this.props.authStatus ? (
                        <Switch>
                            {generatedRoutes}
                        </Switch>
                    ) : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authStatus: state.Auth.status
    }
}

export default withRouter(connect(mapStateToProps)(Content));