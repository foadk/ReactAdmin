import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

const withResourceProvider = (WrappedComponent, consumer) => {
    class Wrapper extends Component {

        tokenData = {
            accessToken: this.props.accessToken,
            refreshToken: this.props.refreshToken,
            expirationDate: this.props.expirationDate
        };

        prepareRequest = (request, consumer, responseTitle) => {
            this.props.prepareRequest(this.tokenData, request, consumer, responseTitle);
        };

        render() {
            return <WrappedComponent {...this.props} prepareRequest={this.prepareRequest} />;
        }
    }

    const mapStateToProps = state => {
        return {
            [consumer]: state.Resource.responses[consumer],
            accessToken: state.Auth.accessToken,
            refreshToken: state.Auth.refreshToken,
            expirationDate: state.Auth.expirationDate
        };
    };
    
    const mapDispatchToProps = dispatch => {
        return {
            prepareRequest: (tokenData, request, consumer, responseTitle) => dispatch(actions.prepareRequest(tokenData, request, consumer, responseTitle)),
            deleteResponse: (consumer) => dispatch(actions.deleteResponse(consumer))
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};

export default withResourceProvider;