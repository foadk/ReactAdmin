import React, { Component } from 'react';

import navigationItems from './_nav';

const buildNavigation = (navItems) => {
    const result = navItems.map(item => {
        if (item.title === true) {
            return (<li className="nav-title">{item.name}</li>);
        } else if (item.hasOwnProperty('divider')) {
            return (<li className="divider"></li>);
        } else {
            let hi = null;
            let res = (
                <li className={"nav-item" + (item.hasOwnProperty('children') ? " nav-dropdown" : "")}>
                    <a className={"nav-link" + (item.hasOwnProperty('children') ? " nav-dropdown-toggle" : "") + 
                    (item.hasOwnProperty('variant') ? " nav-link-" + item.variant : "")}
                        href={!item.hasOwnProperty('children') ? item.url : "#"}>
                        <i className={item.icon} ></i>
                        {item.name}
                        {item.hasOwnProperty('badge') ?
                        <span className={"tag tag-" + item.badge.variant}>{item.badge.text}</span> : ''}
                    </a>
                    {item.hasOwnProperty('children') ?
                        <ul className="nav-dropdown-items">{buildNavigation(item.children)}</ul> : ''}
                </li>
            );
            return res;
        }
    });
    return result;
}

class Sidebar extends Component {

    render() {
        const navigaiton = buildNavigation(navigationItems.items);
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        {navigaiton}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="index.html"><i className="icon-speedometer" /> داشبرد <span className="tag tag-info">جدید</span></a>
                        </li>
                        <li className="nav-title">
                            مدیریت کاربران
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="icon-user-follow" /> ثبت کاربر</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="icon-people" /> لیست کاربران</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="icon-user-following" /> دسترسی کاربران</a>
                        </li>
                        <li className="nav-title">
                            مدیریت فایل ها
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="icon-docs" /> لیست فایل ها</a>
                        </li>
                        <li className="nav-title">
                            گزارش گیری
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="icon-people" /> کاربران</a>
                            <a className="nav-link" href="#"><i className="icon-docs" />  فایل ها</a>
                        </li>
                        <li className="nav-item nav-dropdown">
                            <a className="nav-link nav-dropdown-toggle" href="#">
                                <i className="nav-icon icon-puzzle" /> Base</a>
                            <ul className="nav-dropdown-items">
                                <li className="nav-item">
                                    <a className="nav-link" href="base/breadcrumb.html">
                                        <i className="nav-icon icon-puzzle" /> Breadcrumb</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/cards.html">
                                        <i className="nav-icon icon-puzzle" /> Cards</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/carousel.html">
                                        <i className="nav-icon icon-puzzle" /> Carousel</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/collapse.html">
                                        <i className="nav-icon icon-puzzle" /> Collapse</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/forms.html">
                                        <i className="nav-icon icon-puzzle" /> Forms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/jumbotron.html">
                                        <i className="nav-icon icon-puzzle" /> Jumbotron</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/list-group.html">
                                        <i className="nav-icon icon-puzzle" /> List group</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/navs.html">
                                        <i className="nav-icon icon-puzzle" /> Navs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/pagination.html">
                                        <i className="nav-icon icon-puzzle" /> Pagination</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/popovers.html">
                                        <i className="nav-icon icon-puzzle" /> Popovers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/progress.html">
                                        <i className="nav-icon icon-puzzle" /> Progress</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/scrollspy.html">
                                        <i className="nav-icon icon-puzzle" /> Scrollspy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/switches.html">
                                        <i className="nav-icon icon-puzzle" /> Switches</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/tables.html">
                                        <i className="nav-icon icon-puzzle" /> Tables</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/tabs.html">
                                        <i className="nav-icon icon-puzzle" /> Tabs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="base/tooltips.html">
                                        <i className="nav-icon icon-puzzle" /> Tooltips</a>
                                </li>
                            </ul>
                        </li> */}

                    </ul>
                </nav>
            </div>

        );
    }
}

export default Sidebar;