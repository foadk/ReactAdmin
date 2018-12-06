import React, { Component } from 'react';
import { connect } from 'react-redux';

const withPermissions = (WrappedComponent) => {
    class Wrapper extends Component {

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return connect(mapStateToProps)(Wrapper);
}

const mapStateToProps = state => {
    return {
        permissions: state.Authorization.permissions
    }
}

export default withPermissions;