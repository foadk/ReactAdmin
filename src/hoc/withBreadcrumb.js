import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/';

const withBreadcrumb = WrappedComponent => {
    class Wrapper extends Component {

        wrapped = React.createRef();

        componentDidMount() {
            this.props.setBreadcrumb(this.wrapped.current.breadcrumb);
        }
    
        componentWillUnmount() {
            this.props.clearBreadcrumb();
        }

        render() {
            return <WrappedComponent ref={this.wrapped} {...this.props} />
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