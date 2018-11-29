import React, { Component } from 'react';

import Form from '../base/Form/Form';
// import Axios from '../../connection/axiosWithTokenHeader';
import { fields as editFields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withResourceProvider from '../../hoc/withResourceProvider';

const breadcrumb = [
    {text: 'دسترسی ها', url: '/permissions'},
    {text: 'ویرایش دسترسی', url: '', active: true}
];

class EditPermissions extends Component {

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
        const response = this.props.editPermission;
        if(response) {
            this.props.deleteResponse('editPermission');
            const fields = this.makeData(response.data);
            if('formData' === response.title) {
                this.setState({ fields: fields, loading: false });
            }
            if('reset' === response.title) {
                this.setState({ fields: fields, loading: false, key: this.state.key + 1 });
            }
        }
    }

    getFormData = requestTitle => {
        const request = {
            method: 'get',
            url: 'api/permissions/' + this.props.match.params.id + '/edit',
        };

        this.props.prepareRequest(request, 'editPermission', requestTitle);
    }

    makeData = data => {
        const fields = JSON.parse(JSON.stringify(editFields));
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
            form: 'editPermissionForm',
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
        let form = null;
        if (!this.state.loading) {
            form = (
                <Form
                    fields={this.state.fields}
                    buttons={this.buttons}
                    formTitle="ویرایش دسترسی"
                    formId="editPermissionForm"
                    submitURL={"api/permissions/" + this.props.match.params.id}
                    submitType="put"
                    reset={this.reset}
                    key={this.state.key}
                />
            )
        }
        return form;
    }
}

export default withBreadcrumb(withResourceProvider(EditPermissions, 'editPermission'), breadcrumb);