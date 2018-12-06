import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './sections/Navbar/Navbar';
import Sidebar from './sections/Sidebar/Sidebar';
import Main from './sections/Main/Main';
import Footer from './sections/Footer/Footer';
import * as actions from '../store/actions';

class Layout extends Component {

    componentDidMount() {
        this.props.fetchPermissions(this.props.accessToken);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Sidebar />
                <Main />
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        accessToken: state.Auth.accessToken,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPermissions: (accessToken) => dispatch(actions.fetchPermissions(accessToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);