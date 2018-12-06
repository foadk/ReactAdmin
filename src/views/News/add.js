import React, { Component } from 'react';

import Form from '../base/Form/Form';
// import Axios from '../../connection/axiosWithTokenHeader';
import { fields as formFields } from './fields';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';
import withResourceProvider from '../../hoc/withResourceProvider';

const buttons = [
    {
        type: 'submit',
        classes: 'btn-success',
        form: 'addNewsForm',
        icon: 'fa fa-dot-circle-o',
        text: ' ثبت',
    }
];

const breadcrumb = [
    { text: 'اخبار', url: '/news' },
    { text: 'افزودن خبر', url: '', active: true }
];

const activeSidebarItem = 'افزودن خبر';

class AddNews extends Component {

    state = {
        fields: {},
        loading: true,
        test: 'test',
        key: 1,
    };

    componentDidMount() {
        this.getFormData('formData');
        // const axiosPromise = this.getFormData();
        // axiosPromise.then(fields => {
        //     this.setState({ fields: fields, loading: false });
        // });
    }

    componentDidUpdate() {
        const response = this.props.addNews;
        if (response) {
            this.props.deleteResponse('addNews');
            if ('success' === response.status) {
                const data = response.data;
                const cats = this._prepareCats(data.cats);
                formFields.news_cat_id.options = cats;
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
            url: 'api/news/create',
        };

        this.props.prepareRequest(request, 'addNews', requestTitle);

        // const axiosPromise = Axios.get('api/news/create')
        //     .then(({ data }) => {
        //         // const tree = makeTree(data.treeItems.data, data.treeItems.parentId);
        //         const cats = this._prepareCats(data.cats);
        //         formFields.news_cat_id.options = cats;
        //         return formFields;
        //     });
        // axiosPromise.catch(error => {
        //     console.log(error);
        // });
        // return axiosPromise;
    }

    _prepareCats = cats => {
        cats.map(item => {
            item.value = item.id;
            item.text = item.title;
            delete item.id;
            delete item.title;
            return item;
        })
        cats.unshift({ value: '', text: 'انتخاب کنید' });
        return cats;
    };

    reset = () => {
        this.getFormData('reset');
        // const axiosPromise = this.getFormData();
        // axiosPromise.then(fields => {
        //     this.setState({ fields: fields, loading: false, key: this.state.key + 1 });
        // });
    }

    render() {
        let form = null;
        if (!this.state.loading) {
            form = (
                <Form
                    fields={this.state.fields}
                    buttons={buttons}
                    formTitle="ایجاد خبر جدید"
                    formId="addNewsForm"
                    submitURL="api/news"
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
        withResourceProvider(AddNews, 'addNews'),
        breadcrumb
    ),
    activeSidebarItem
);