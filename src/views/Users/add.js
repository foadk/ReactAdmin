import React, { Component } from 'react';

import Form from '../base/Form/Form';
import { fields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';

const buttons = [
    {
        type: 'submit',
        classes: 'btn-success',
        form: 'addUserForm',
        icon: 'fa fa-dot-circle-o',
        text: ' ثبت',
    }
];

const breadcrumb = [
    {text: 'کاربران', url: '/users'},
    {text: 'افزودن کاربر', url: '', active: true}
];
const activeSidebarItem = 'افزودن کاربر';

class AddUsers extends Component {

    reset = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <Form
                fields={fields}
                buttons={buttons}
                formTitle="ایجاد کاربر جدید"
                formId="addUserForm"
                submitURL="api/users"
                reset={this.reset}
            />
        );
    }
}

export default withActiveSidebarItem(withBreadcrumb(AddUsers, breadcrumb), activeSidebarItem);