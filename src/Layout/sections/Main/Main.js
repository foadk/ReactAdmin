import React, { Component } from 'react';

import Breadcrumb from './Breadcrumb';
import Content from './Content';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <Breadcrumb />
                <Content />
            </main>
        );
    }
}

export default Main;