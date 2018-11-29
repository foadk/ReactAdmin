import React, { Component } from 'react';

import Form from '../base/Form/Form';
import { fields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';

const buttons = [
    {
        type: 'submit',
        classes: 'btn-success',
        form: 'addPermissionForm',
        icon: 'fa fa-dot-circle-o',
        text: ' ثبت',
    }
];

const breadcrumb = [
    {text: 'دسترسی ها', url: '/permissions'},
    {text: 'افزودن دسترسی', url: '', active: true}
];
const activeSidebarItem = 'افزودن دسترسی';

class AddPermissions extends Component {

    reset = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <Form
                fields={fields}
                buttons={buttons}
                formTitle="ایجاد دسترسی جدید"
                formId="addPermissionForm"
                submitURL="api/permissions"
                reset={this.reset}
            />
        );
    }
}

export default withActiveSidebarItem(withBreadcrumb(AddPermissions, breadcrumb), activeSidebarItem);