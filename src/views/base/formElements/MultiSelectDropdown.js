import React from 'react';
import Select from 'react-select';

import withValidation from './withValidation';
import './css/MultiSelectDropdown.css';

const handleChange = (items, callback) => {
    const selectedItems = items.map(item => item.value);
    const result = { target: { value: selectedItems } };
    callback(result);
}

const getSelectedItems = (values, items) => {
    return values.map(itemId => {
        const label = items.find(item => item.value === itemId).label;
        return { value: itemId, label: label }
    });
}

const multiSelectDropdown = props => (
    <div className={"col-md-" + (props.cols ? props.cols : 6)}>
        <div className={"form-group" }>
            <label
                className={"form-form-control-label" + (props.labelClasses ? " " + props.labelClasses : "")}>
                {props.label + ":"}
            </label>
            <Select
                options={props.items}
                value={getSelectedItems(props.value, props.items)}
                onChange={(seletedItems) => handleChange(seletedItems, props.changed)}
                isMulti
                className={props.validationClass ? props.validationClass : null}
                classNamePrefix="multiSelectDd"
                placeholder="انتخاب کنید..."
            />
        </div>
    </div>
);

export default withValidation(multiSelectDropdown);