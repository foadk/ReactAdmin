import React, { Component } from 'react';

import Datatable from '../base/Datatable/Datatable';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';
import withResourceProvider from '../../hoc/withResourceProvider';
import Button from '../base/formElements/Button';
import asyncComponent from '../../hoc/asyncComponent';

const QuickEdit = asyncComponent(() => import('./edit'), 'QuickEdit');

const activeSidebarItem = 'مشاهده دسترسی ها';

const breadcrumb = [{ text: 'دسترسی ها', url: '', active: true }];

const consumer = 'datatablePermissions'

class Permissions extends Component {

    syncPermissions = () => {
        console.log('asdfasdf');
        const request = {
            method: 'get',
            url: 'api/permissions/sync',
        };

        this.props.prepareRequest(request, consumer, 'sync');
    }

    buttons = [
        {
            classes: 'btn-success',
            icon: 'fa fa-refresh',
            text: '',
            action: this.syncPermissions
        }
    ];

    state = {
        key: 1
    }

    componentDidUpdate() {
        const response = this.props[consumer];
        if (response) {
            this.props.deleteResponse(consumer);
            if ('success' === response.status) {
                if ('sync' === response.title) {
                    this.setState({ key: this.state.key + 1 });
                }
            }
        }
    }

    render() {
        const { key } = this.state;
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">
                            <div className="col-md-10">لیست دسترسی ها</div>
                            <div className="row col-md-2">
                                {this.buttons.map((button, index) => (
                                    <Button key={index} icon={button.icon} click={button.action}
                                        classes={button.classes} >{button.text}</Button>
                                ))}
                            </div>
                        </div>
                        <div className='card-body'>
                            <Datatable route='permissions' key={key} QuickEdit={QuickEdit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withActiveSidebarItem(withBreadcrumb(
    withResourceProvider(Permissions, 'datatablePermissions'), breadcrumb
), activeSidebarItem);