import React, { Component } from 'react';
import Datatable from '../base/Datatable/Datatable';

import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';

const breadcrumb = [{ text: 'کاربران', url: '', active: true }];
const activeSidebarItem = 'مشاهده کاربران';

class Users extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">لیست کاربران</div>
                        <div className='card-body'>
                            <Datatable url='api/users/' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withActiveSidebarItem(withBreadcrumb(Users, breadcrumb), activeSidebarItem);