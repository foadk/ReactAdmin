import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

const withBreadcrumb = (WrappedComponent, breadcrumb) => {
    class Wrapper extends Component {

        componentDidMount() {
            this.props.setBreadcrumb(breadcrumb);
        }

        componentWillUnmount() {
            this.props.clearBreadcrumb();
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return connect(null, mapDispatchToProps)(Wrapper);
}

const mapDispatchToProps = dispatch => {
    return {
        setBreadcrumb: breadcrumb => dispatch(actions.setBreadcrumb(breadcrumb)),
        clearBreadcrumb: () => dispatch(actions.clearBreadcrumb())
    }
}

export default withBreadcrumb;