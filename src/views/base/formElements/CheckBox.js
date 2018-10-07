import React from 'react';
import withValidation from './withValidation';

const checkBox = (props) => (
    <div className={"col-md-" + (props.cols ? props.cols : 6)}>
        <div className={"form-group" + props.validationClass}>
            <label
                className={"form-form-control-label" + (props.labelClasses ? " " + props.labelClasses : "")}
                htmlFor={props.id}>
                {props.label + ":"}
            </label>
            <div className='checkbox'>
                <input type={props.elementType}
                    id={props.id}
                    name={props.name}
                    checked={props.value}
                    // className={"form-control" + (props.classes ? " " + props.classes : "")}
                    onChange={props.changed}
                />
            </div>
            <span className="help-block">{props.helpText}</span>
        </div>
    </div>
);

export default withValidation(checkBox);