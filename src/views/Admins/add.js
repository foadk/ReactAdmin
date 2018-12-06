import React, { Component } from 'react';

import Form from '../base/Form/Form';
import { fields as formFields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';
import withResourceProvider from '../../hoc/withResourceProvider';

const buttons = [
    {
        type: 'submit',
        classes: 'btn-success',
        form: 'addAdminsForm',
        icon: 'fa fa-dot-circle-o',
        text: ' ثبت',
    }
];

const breadcrumb = [
    { text: 'مدیران', url: '/admins' },
    { text: 'افزودن مدیر', url: '', active: true }
];

const activeSidebarItem = 'افزودن مدیر';

class AddAdmins extends Component {

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
        const response = this.props.addAdmins;
        if (response) {
            this.props.deleteResponse('addAdmins');
            if ('success' === response.status) {
                const data = response.data;
                const roles = this._prepareRoles(data.roles);
                formFields.role_ids.items = roles;
                if ('formData' === response.title) {
                    this.setState({ fields: formFields, loading: false });
                }
                if ('reset' === response.title) {
                    this.setState({ fields: formFields, loading: false, key: this.state.key + 1 });
                }
            } else {
                this.setState({loading: false});
            }
        }
    }

    getFormData = (requestTitle) => {

        const request = {
            method: 'get',
            url: 'api/admins/create',
        };

        this.props.prepareRequest(request, 'addAdmins', requestTitle);
    }

    _prepareRoles = permissionGropus => {
        permissionGropus.map(item => {
            item.value = item.id
            item.label = item.title;
            delete item.title;
            delete item.id;
            return item;
        })
        return permissionGropus;
    };

    reset = () => {
        this.getFormData('reset');
    }

    render() {
        let form = null;
        if (!this.state.loading) {
            form = (
                <Form
                    fields={this.state.fields}
                    buttons={buttons}
                    formTitle="ایجاد مدیر جدید"
                    formId="addAdminsForm"
                    submitURL="api/admins"
                    reset={this.reset}
                    key={this.state.key}
                />
            )
        }
        return form;
    }
}

export default withActiveSidebarItem(
    withBreadcrumb(
        withResourceProvider(AddAdmins, 'addAdmins'),
        breadcrumb
    ),
    activeSidebarItem
);