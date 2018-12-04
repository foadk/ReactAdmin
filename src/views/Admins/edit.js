import React, { Component } from 'react';

import Form from '../base/Form/Form';
import { fields as formFields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withResourceProvider from '../../hoc/withResourceProvider';

const breadcrumb = [
    { text: 'مدیران', url: '/admins' },
    { text: 'ویرایش مدیر', url: '', active: true }
];

class EditAdmins extends Component {

    state = {
        fields: {},
        loading: true,
        test: 'test',
        key: 1,
    };

    componentDidMount() {
        this.getFormData('formData');
    }

    componentDidUpdate() {
        const response = this.props.editAdmins;
        if (response) {
            this.props.deleteResponse('editAdmins');
            const data = response.data;
            console.log(data.fields)
            const roles = this._prepareRoles(data.roles);
            formFields.role_ids.items = roles;
            formFields.password.validation={};
            const fields = this.makeData(data.fields);
            if ('formData' === response.title) {
                this.setState({ fields: fields, loading: false });
            }
            if ('reset' === response.title) {
                this.setState({ fields: fields, loading: false, key: this.state.key + 1 });
            }
        }
    }

    getFormData = (requestTitle) => {

        const request = {
            method: 'get',
            url: 'api/admins/' + this.props.match.params.id + '/edit',
        };

        this.props.prepareRequest(request, 'editAdmins', requestTitle);
    }

    _prepareRoles = roles => {
        roles.map(item => {
            item.value = item.id
            item.label = item.title;
            delete item.title;
            delete item.id;
            return item;
        })
        return roles;
    };

    makeData = (data) => {
        const fields = JSON.parse(JSON.stringify(formFields));
        for (let field in fields) {
            fields[field].value = data[field] ? data[field] : '';
        }
        return fields;
    }

    reset = () => {
        this.getFormData('reset');
    }

    buttons = [
        {
            type: 'submit',
            classes: 'btn-success',
            form: 'editAdminsForm',
            icon: 'fa fa-dot-circle-o',
            text: ' ثبت',
            cols: 6,
        },
        {
            classes: 'btn-danger',
            icon: 'fa fa-ban',
            text: ' بازنشانی',
            cols: 6,
            click: this.reset,
        },
    ];

    render() {
        console.log(this.state.fields);
        let form = null;
        if (!this.state.loading) {
            form = (
                <Form
                    fields={this.state.fields}
                    buttons={this.buttons}
                    formTitle="ویرایش مدیر"
                    formId="editAdminsForm"
                    submitURL={"api/admins/" + this.props.match.params.id}
                    submitType="put"
                    reset={this.reset}
                    key={this.state.key}
                />
            )
        }
        return form;
    }
}

export default withBreadcrumb(withResourceProvider(EditAdmins, 'editAdmins'), breadcrumb);