import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">خانه</li>
                <li className="breadcrumb-item"><a href="#">مدیریت</a>
                </li>
                <li className="breadcrumb-item active">داشبرد</li>
                {/* Breadcrumb Menu*/}
                <li className="breadcrumb-menu">
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <a className="btn btn-secondary" href="#"><i className="icon-speech" /></a>
                        <a className="btn btn-secondary" href="./"><i className="icon-graph" /> &nbsp;داشبرد</a>
                        <a className="btn btn-secondary" href="#"><i className="icon-settings" /> &nbsp;تنظیمات</a>
                    </div>
                </li>
            </ol>
        );
    }
}

export default Breadcrumb;