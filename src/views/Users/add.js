import React, { Component } from 'react';

import Form from '../base/Form/Form';
import { fields } from './fields';

const buttons = [
    {
        type: 'submit',
        classes: 'btn-success',
        form: 'addUserForm',
        icon: 'fa fa-dot-circle-o',
        text: ' ثبت',
    }
];

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

export default AddUsers;