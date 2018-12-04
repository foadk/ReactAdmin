import React, { Component } from 'react';
import Datatable from '../base/Datatable/Datatable';

import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';

const breadcrumb = [{ text: 'مدیران', url: '', active: true }];
const activeSidebarItem = 'مشاهده مدیران';

class Users extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">لیست مدیران</div>
                        <div className='card-body'>
                            <Datatable route='admins' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withActiveSidebarItem(withBreadcrumb(Users, breadcrumb), activeSidebarItem);