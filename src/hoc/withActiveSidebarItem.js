import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/';

const withActiveSidebarItem = (WrappedComponent, activeSidebarItem) => {
    class Wrapper extends Component {

        componentDidMount() {
            this.props.setActiveSidebarItem(activeSidebarItem);
        }
    
        componentWillUnmount() {
            this.props.clearActiveSidebarItem();
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    
    return connect(null, mapDispatchToProps)(Wrapper);
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveSidebarItem: item => dispatch(actions.setActiveSidebarItem(item)),
        clearActiveSidebarItem: () => dispatch(actions.clearActiveSidebarItem())
    }
}

export default withActiveSidebarItem;