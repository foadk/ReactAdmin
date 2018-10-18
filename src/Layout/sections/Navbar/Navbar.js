import React, { Component } from 'react';

import Logout from '../../Auth/Logout';

class Navbar extends Component {

    state = {
        userMenuOpen: false,
        logout: false
    }

    userMenuClickHandler = () => {
        this.setState({ userMenuOpen: !this.state.userMenuOpen });
    }

    logoutHandler = () => {
        this.setState({ logout: true });
    }

    render() {
        const logout = this.state.logout ? <Logout /> : null;
        return (
            <React.Fragment>
                {logout}
                <header className="navbar">
                    <div className="container-fluid">
                        <button className="navbar-toggler mobile-toggler hidden-lg-up" type="button">☰</button>
                        <a className="navbar-brand" />
                        <ul className="nav navbar-nav hidden-md-down">
                            <li className="nav-item">
                                <a className="nav-link navbar-toggler layout-toggler">☰</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav pull-left hidden-md-down">
                            <li className="nav-item">
                                <a className="nav-link aside-toggle"><i className="icon-bell" /><span className="tag tag-pill tag-danger">5</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="icon-list" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="icon-location-pin" /></a>
                            </li>
                            <li className={"nav-item dropdown" + (this.state.userMenuOpen ? " open" : "")}>
                                <a className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" onClick={this.userMenuClickHandler} role="button" aria-haspopup="true" aria-expanded="false">
                                    <img src="/img/avatars/6.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    <span className="hidden-md-down">مدیر</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-header text-xs-center">
                                        <strong>تنظیمات</strong>
                                    </div>
                                    <a className="dropdown-item"><i className="fa fa-user" /> پروفایل</a>
                                    <a className="dropdown-item"><i className="fa fa-wrench" /> تنظیمات</a>
                                    <div className="divider" />
                                    <a className="dropdown-item" onClick={this.logoutHandler} style={{cursor: 'pointer'}}>
                                        <i className="fa fa-lock" /> خروج
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-toggler aside-toggle">☰</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Navbar;