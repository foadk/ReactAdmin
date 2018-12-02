import React, { Component } from 'react';

import Form from '../base/Form/Form';
import { fields as formFields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withResourceProvider from '../../hoc/withResourceProvider';

const breadcrumb = [
    { text: 'گروه های کاربری', url: '/roles' },
    { text: 'ویرایش گروه کاربری', url: '', active: true }
];

class EditRoles extends Component {

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
        const response = this.props.editRoles;
        if (response) {
            this.props.deleteResponse('editRoles');
            const data = response.data;
            const permissionGroups = this._preparePermissionGropus(data.permissionGroups);
            formFields.permission_group_ids.items = permissionGroups;
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
            url: 'api/roles/' + this.props.match.params.id + '/edit',
        };

        this.props.prepareRequest(request, 'editRoles', requestTitle);
    }

    _preparePermissionGropus = permissionGropus => {
        permissionGropus.map(item => {
            item.label = item.title;
            delete item.title;
            return item;
        })
        return permissionGropus;
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
            form: 'editRolesForm',
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
                    formTitle="ویرایش کاربر"
                    formId="editRolesForm"
                    submitURL={"api/roles/" + this.props.match.params.id}
                    submitType="put"
                    reset={this.reset}
                    key={this.state.key}
                />
            )
        }
        return form;
    }
}

export default withBreadcrumb(withResourceProvider(EditRoles, 'editRoles'), breadcrumb);