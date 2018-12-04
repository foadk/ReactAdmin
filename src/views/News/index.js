import React, { Component } from 'react';

import Datatable from '../base/Datatable/Datatable';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';
import asyncComponent from '../../hoc/asyncComponent';

const QuickEdit = asyncComponent(() => import('./edit'), 'QuickEdit');

const activeSidebarItem = 'مشاهده اخبار';

const breadcrumb = [{text: 'اخبار', url: '', active: true}];

class Users extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">لیست اخبار</div>
                        <div className='card-body'>
                            <Datatable route='news' QuickEdit={QuickEdit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withActiveSidebarItem(withBreadcrumb(Users, breadcrumb), activeSidebarItem);