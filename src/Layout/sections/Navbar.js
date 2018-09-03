import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler mobile-toggler hidden-lg-up" type="button">☰</button>
                    <a className="navbar-brand" href="#" />
                    <ul className="nav navbar-nav hidden-md-down">
                        <li className="nav-item">
                            <a className="nav-link navbar-toggler layout-toggler" href="#">☰</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav pull-left hidden-md-down">
                        <li className="nav-item">
                            <a className="nav-link aside-toggle" href="#"><i className="icon-bell" /><span className="tag tag-pill tag-danger">5</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="icon-list" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="icon-location-pin" /></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <img src="img/avatars/6.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                                <span className="hidden-md-down">مدیر</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-header text-xs-center">
                                    <strong>تنظیمات</strong>
                                </div>
                                <a className="dropdown-item" href="#"><i className="fa fa-user" /> پروفایل</a>
                                <a className="dropdown-item" href="#"><i className="fa fa-wrench" /> تنظیمات</a>
                                <div className="divider" />
                                <a className="dropdown-item" href="#"><i className="fa fa-lock" /> خروج</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-toggler aside-toggle" href="#">☰</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navbar;