import React from 'react';
import withValidation from './withValidation';

const textArea = (props) => (
    <div className={"col-md-" + (props.cols ? props.cols : 6)}>
        <div className={"form-group" + props.validationClass}>
            <label
                className={"form-form-control-label" + (props.labelClasses ? " " + props.labelClasses : "")}
                htmlFor={props.id}>
                {props.label + ":"}
            </label>
            <textarea
                id={props.id}
                name={props.name}
                value={props.value}
                rows={4}
                className={"form-control" + (props.classes ? " " + props.classes : "")}
                placeholder={('placeholder' in props) ? props.placeholder : props.label}
                onChange={props.changed}
                style={{ color: 'black' }}
            />
            <span className="help-block">{props.helpText}</span>
        </div>
    </div>
);

export default withValidation(textArea);