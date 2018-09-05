import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import navigationItems from '../../../_nav';

class Sidebar extends Component {

    itemClickHandler = (event) => {
        if (event.target.classList.contains("nav-dropdown-toggle")) {
            event.preventDefault();
            event.target.parentElement.classList.toggle("open");
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
                    <li key={item.name} className={"nav-item" + (item.hasOwnProperty('children') ? " nav-dropdown" : "")}>
                        <Link className={"nav-link" + (item.hasOwnProperty('children') ? " nav-dropdown-toggle" : "") +
                            (item.hasOwnProperty('variant') ? " nav-link-" + item.variant : "")}
                            onClick={this.itemClickHandler}
                            to={!item.hasOwnProperty('children') ? item.url : "#"}>
                            <i className={item.icon} ></i>
                            {item.name}
                            {item.hasOwnProperty('badge') ?
                                <span className={"tag tag-" + item.badge.variant}>{item.badge.text}</span> : ''}
                        </Link>
                        {item.hasOwnProperty('children') ?
                            <ul className="nav-dropdown-items">{this.buildNavigation(item.children)}</ul> : ''}
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