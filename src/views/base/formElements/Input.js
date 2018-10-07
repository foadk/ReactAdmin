import React from 'react';
import withValidation from './withValidation';

const input = (props) => (
    <div className={"col-md-" + (props.cols ? props.cols : 6)}>
        <div className={"form-group" + props.validationClass}>
            <label
                className={"form-form-control-label" + (props.labelClasses ? " " + props.labelClasses : "")}
                htmlFor={props.id}>
                {props.label + ":"}
            </label>
            <input type={props.elementType}
                id={props.id}
                name={props.name}
                value={props.value}
                className={"form-control" + (props.classes ? " " + props.classes : "")}
                placeholder={('placeholder' in props) ? props.placeholder : props.label}
                onChange={props.changed}
                style={{ color: 'black', height: '44px' }}
            />
            <span className="help-block">{props.helpText}</span>
        </div>
    </div>
);

export default withValidation(input);

// props list:
// props.cols
// props.label
// props.labelClasses
// props.id
// props.elementType : could be text, email, password, number
// props.name
// props.classes
// props.placeholder
// props.helpText