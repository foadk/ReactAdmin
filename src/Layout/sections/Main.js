import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main className="main">
                {/* Breadcrumb */}
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
                <div className="container-fluid">
                    <div className="animated fadeIn">
                        <div className="row">
                        </div>
                        {/*/row*/}
                    </div>
                </div>
                {/*/.container-fluid*/}
            </main>
        );
    }
}

export default Main;