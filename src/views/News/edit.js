import React, { Component } from 'react';
import Axios from '../../connection/axios';

import Form from '../base/Form/Form';
import { fields as formFields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';

const breadcrumb = [
    {text: 'اخبار', url: '/news'},
    {text: 'ویرایش خبر', url: '', active: true}
];

class EditNews extends Component {

    state = {
        fields: {},
        loading: true,
        test: 'test',
        key: 1,
    };

    componentDidMount() {
        const axiosPromise = this.getFormData();
        axiosPromise.then(fields => {
            this.setState({ fields: fields, loading: false });
        });
    }

    getFormData = () => {
        const axiosPromise = Axios.get('api/news/' + this.props.match.params.id + '/edit')
            .then(({ data }) => {
                const cats = this._prepareCats(data.cats);
                formFields.news_cat_id.options = cats;
                return this.makeData(data.fields);
            });
        axiosPromise.catch(error => {
            console.log(error);
        });
        return axiosPromise;
    }

    _prepareCats = cats => {
        cats.map(item => {
            item.value = item.id;
            item.text = item.title;
            delete item.id;
            delete item.title;
            return item;
        })
        cats.unshift({value: '', text: 'انتخاب کنید'});
        return cats;
    };

    makeData = (data) => {
        const fields = JSON.parse(JSON.stringify(formFields));
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
            form: 'editNewsForm',
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
                    formId="editNewsForm"
                    submitURL={"api/news/" + this.props.match.params.id}
                    submitType="put"
                    reset={this.reset}
                    key={this.state.key}
                />
            )
        }
        return form;
    }
}

export default withBreadcrumb(EditNews, breadcrumb);