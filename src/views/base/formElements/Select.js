import React from 'react';
import withValidation from './withValidation';

const select = (props) => (
    <div className={"col-md- col-md-" + (props.cols ? props.cols : 6)}>
        <div className={"form-group" + props.validationClass}>
            <label
                className={"form-form-control-label" + (props.labelClasses ? " " + props.labelClasses : "")}
                htmlFor={props.id}>
                {props.label + ":"}
            </label>
            <select
                id={props.id}
                name={props.name}
                value={props.value}
                className={"form-control" + (props.classes ? " " + props.classes : "")}
                size={1}
                onChange={props.changed}
                // style={{padding: '0.25em 0.75em'}}
            >
                {props.options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
            </select>
            <span className="help-block">{props.helpText}</span>
        </div>
    </div>
);

export default withValidation(select);

// props list:
// props.options
// props.cols
// props.label
// props.labelClasses
// props.id
// props.name
// props.classes
// props.helpText