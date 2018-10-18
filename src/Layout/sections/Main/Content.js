import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
                    <Switch>
                        {generatedRoutes}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Content;