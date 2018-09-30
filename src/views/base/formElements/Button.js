import React from 'react';

import './Spinner.css';

const button = (props) => {
    let result = null;
    if (props.spinning && props.type === 'submit') {
        result = (
            <div className={"form-group col-md- col-md-" + (props.cols ? props.cols : 12)}>
                <button
                    className={"btn " + props.classes}
                    style={{ width: '100%' }}>
                    <div className="lds-dual-ring"></div>
                </button>
            </div>
        )
    } else {
        result = (
            <div className={"form-group col-md- col-md-" + (props.cols ? props.cols : 12)}>
                <button
                    type={props.type}
                    className={"btn " + props.classes}
                    style={{ width: '100%' }}
                    form={props.form}>
                    {props.icon ? <i className={props.icon} /> : null}
                    {props.children}
                </button>
            </div>
        )
    }
    return result;
};

export default button;

// props list:
// props.cols
// props.classes
// props.icon
// props.children