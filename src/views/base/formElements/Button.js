import React from 'react';

const button = (props) => (
    <div className={"col-md- col-md-" + (props.cols ? props.cols : 12)}>
        <button
            type={props.type}
            className={"btn " + props.classes}
            style={{ width: '100%' }}
            form={props.form}>
            {props.icon ? <i className={props.icon} /> : null}
            {props.children}
        </button>
    </div>
);

export default button;

// props list:
// props.cols
// props.classes
// props.icon
// props.children