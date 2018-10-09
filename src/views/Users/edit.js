import React, { Component } from 'react';

import Form from '../base/Form/Form';
import Axios from '../../connection/axios';
import { fields as editFields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';

editFields.password.validation = {};

class EditUsers extends Component {

    state = {
        fields: {},
        loading: true,
        test: 'test',
        key: 1,
    };

    breadcrumb = [
        {text: 'کاربران', url: '/users'},
        {text: 'ویرایش کاربر', url: '', active: true}
    ];

    componentDidMount() {
        const axiosPromise = this.getFormData();
        axiosPromise.then(fields => {
            this.setState({ fields: fields, loading: false });
        });
    }

    getFormData = () => {
        const axiosPromise = Axios.get('api/users/' + this.props.match.params.id + '/edit')
            .then(({ data }) => {
                return this.makeData(data);
            });
        axiosPromise.catch(error => {
            console.log(error);
        });
        return axiosPromise;
    }

    makeData = (data) => {
        const fields = JSON.parse(JSON.stringify(editFields));
        for (let field in fields) {
            fields[field].value = data[field] ? data[field] : '';
        }
        return fields;
    }

    reset = () => {
        const axiosPromise = this.getFormData();
        axiosPromise.then(fields => {
            this.setState({ fields: fields, loading: false, key: this.state.key + 1 });
        });
    }

    buttons = [
        {
            type: 'submit',
            classes: 'btn-success',
            form: 'editUserForm',
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
                    formTitle="ویرایش کاربر"
                    formId="editUserForm"
                    submitURL={"api/users/" + this.props.match.params.id}
                    submitType="put"
                    reset={this.reset}
                    key={this.state.key}
                />
            )
        }
        return form;
    }
}

export default withBreadcrumb(EditUsers);