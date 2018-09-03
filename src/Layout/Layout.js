import React, { Component } from 'react';

import Navbar from './sections/Navbar';
import Sidebar from './sections/Sidebar';
import Main from './sections/Main';
import Footer from './sections/Footer';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Sidebar />
                <Main />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;