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
        form: 'addRolesForm',
        icon: 'fa fa-dot-circle-o',
        text: ' ثبت',
    }
];

const breadcrumb = [
    { text: 'گروه های کاربری', url: '/roles' },
    { text: 'افزودن گروه کاربری', url: '', active: true }
];

const activeSidebarItem = 'افزودن گروه کاربری';

class AddRoles extends Component {

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
        const response = this.props.addRoles;
        if (response) {
            this.props.deleteResponse('addRoles');
            if ('success' === response.status) {
                const data = response.data;
                const permissionGroups = this._preparePermissionGropus(data.permissionGroups);
                formFields.permission_group_ids.items = permissionGroups;
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
            url: 'api/roles/create',
        };

        this.props.prepareRequest(request, 'addRoles', requestTitle);
    }

    _preparePermissionGropus = permissionGropus => {
        permissionGropus.map(item => {
            item.label = item.title;
            delete item.title;
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
                    formTitle="ایجاد گروه کاربری جدید"
                    formId="addRolesForm"
                    submitURL="api/roles"
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
        withResourceProvider(AddRoles, 'addRoles'),
        breadcrumb
    ),
    activeSidebarItem
);