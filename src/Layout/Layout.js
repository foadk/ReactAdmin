import React, { Component } from 'react';

import Navbar from './sections/Navbar/Navbar';
import Sidebar from './sections/Sidebar/Sidebar';
import Main from './sections/Main/Main';
import Footer from './sections/Footer/Footer';

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