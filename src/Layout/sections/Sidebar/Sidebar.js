import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import navigationItems from '../../../_nav';

class Sidebar extends Component {

    state = {
        openMenus: []
    }

    // itemClickHandler = (event) => {
    //     if (event.target.classList.contains("nav-dropdown-toggle")) {
    //         event.preventDefault();
    //         event.target.parentElement.classList.toggle("open");
    //     }
    // }

    itemClickHandler = (item) => {
        if (item.hasOwnProperty('children')) {
            const openMenus = [...this.state.openMenus];
            if (openMenus.includes(item.name)) {
                const index = openMenus.indexOf(item.name);
                openMenus.splice(index, 1);
            } else {
                openMenus.push(item.name);
            }
            this.setState({ openMenus: openMenus });
        }
    }

    buildNavigation = (navItems) => {
        const result = navItems.map(item => {
            if (item.title === true) {
                return (<li key={item.name} className="nav-title">{item.name}</li>);
            } else if (item.hasOwnProperty('divider')) {
                return (<li key={item.name} className="divider"></li>);
            } else {
                let res = (
                    <li key={item.name} className={"nav-item" +
                        (item.hasOwnProperty('children') ? " nav-dropdown" : "") +
                        (this.state.openMenus.includes(item.name) ? (" open") : '')}>
                        <Link className={"nav-link" +
                            (item.hasOwnProperty('children') ? " nav-dropdown-toggle" : "") +
                            (item.hasOwnProperty('variant') ? " nav-link-" + item.variant : "")}
                            id={item.name}
                            onClick={() => this.itemClickHandler(item)}
                            to={!item.hasOwnProperty('children') ? item.url : "#"}>
                            <i className={item.icon} ></i>
                            {item.name}
                            {item.hasOwnProperty('badge') ?
                                <span className={"tag tag-" + item.badge.variant}>
                                    {item.badge.text}
                                </span> : ''}
                        </Link>
                        {item.hasOwnProperty('children') ?
                            <ul className="nav-dropdown-items">
                                {this.buildNavigation(item.children)}
                            </ul> : ''}
                    </li>
                );
                return res;
            }
        });
        return result;
    }

    render() {
        const navigaiton = this.buildNavigation(navigationItems.items);
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        {navigaiton}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;