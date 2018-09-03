import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-left">
                    <a href="http://coreui.io">CoreUI</a> © 2016 creativeLabs.
                </span>
                <span className="pull-right">
                    Powered by <a href="http://coreui.io">CoreUI</a>
                </span>
            </footer>

        );
    }
}

export default Footer;