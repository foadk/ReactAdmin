import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to='/'>خانه</Link></li>
                {this.props.breadcrumb.map(item => (
                    <li key={item.url} className={"breadcrumb-item" + (item.active ? " active" : "")}>
                        <Link to={item.url} onClick={item.url ? () => { } : (e) => { e.preventDefault() }}>
                            {item.text}
                        </Link>
                    </li>
                ))}
                {/* <li className="breadcrumb-item">خانه</li>
                <li className="breadcrumb-item"><a href="#">مدیریت</a></li>
                <li className="breadcrumb-item active">داشبرد</li> */}
                {/* Breadcrumb Menu*/}
                <li className="breadcrumb-menu">
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <Link className="btn btn-secondary" to="" onClick={(e) => { e.preventDefault() }}>
                            <i className="icon-speech" />
                        </Link>
                        <Link className="btn btn-secondary" to="./">
                            <i className="icon-graph" /> &nbsp;داشبرد
                        </Link>
                        <Link className="btn btn-secondary" to="" onClick={(e) => { e.preventDefault() }}>
                            <i className="icon-settings" /> &nbsp;تنظیمات
                        </Link>
                    </div>
                </li>
            </ol>
        );
    }
}

const mapStateToProps = state => {
    return {
        breadcrumb: state.UI.breadcrumb
    }
}

export default connect(mapStateToProps)(Breadcrumb);