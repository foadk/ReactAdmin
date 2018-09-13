import React from 'react';

const headerSectionTitles = {
    'main': 'مشخصات',
    'actions': 'عملیات',
};

const actionIcons = {
    delete: (<i className="fa fa-trash" title="حذف"></i>),
    edit: (<i className="fa fa-edit" title="ویرایش"></i>),
    quick_edit: (<i className="fa fa-pencil" title="ویرایش سریع"></i>),
}

const columnSizes = {
    id: 60,
    email: 220
}

export const prepHeaders = (headerData) => {
    const headers = [];
    for (const section in headerData) {
        const columns = [];
        for (const header in headerData[section]) {
            const newHeader = { accessor: header }
            if (section !== 'actions') {
                newHeader['Header'] = headerData[section][header];
            } else {
                newHeader['Header'] = '';
                newHeader['width'] = 40;
                newHeader['filterable'] = false;
            }
            if(header in columnSizes) {
                newHeader['width'] = columnSizes[header];
            }
            columns.push(newHeader);
        }
        headers.push({
            Header: headerSectionTitles[section],
            columns: columns
        });
    }
    return headers;
};

export const addActionsToRows = (rows, actions) => {
    const newRows = rows.map(row => {
        for (const action in actions) {
            row[action] = actionIcons[action];
        }
        return row;
    });
    return newRows;
}