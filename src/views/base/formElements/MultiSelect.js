import React from "react";
import MultiSelect from "@kenshooui/react-multi-select";

import './css/MultiSelect.css';
import withValidation from './withValidation';

const changed = (items, callback) => {
    const selectedItems = items.map(item => item.id);
    const result = { target: { value: selectedItems } };
    callback(result);
}

const getSelectedItems = (values, items) => {
    return values.map(itemId => {
        const label = items.find(item => item.id === itemId).label;
        return { id: itemId, label: label }
    });
}

const kenshooMultiSelect = props => (
    <div className={"col-md-" + (props.cols ? props.cols : 12)}>
        <div className={"form-group" + props.validationClass}>
            <label
                className={"form-form-control-label" + (props.labelClasses ? " " + props.labelClasses : "")}>
                {props.label + ":"}
            </label>
            <MultiSelect
                items={props.items}
                selectedItems={getSelectedItems(props.value, props.items)}
                onChange={(selectedItems) => changed(selectedItems, props.changed)}
                showSelectedItems={props.showSelectedItems ? props.showSelectedItems : true}
                wrapperClassName={props.validationClass ? props.validationClass : null}
                messages={{
                    searchPlaceholder: 'جستجو...',
                    noItemsMessage: 'آیتمی موجود نیست',
                    noneSelectedMessage: 'هیچکدام انتخاب نشده اند',
                    selectedMessage: 'آیتم انتخاب شده',
                    selectAllMessage: 'انتخاب همه',
                    clearAllMessage: 'حذف همه'
                }}
            />
        </div>
    </div>
);

export default withValidation(kenshooMultiSelect);