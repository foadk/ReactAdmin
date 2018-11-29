import React, { Component } from 'react';
import Datatable from '../base/Datatable/Datatable';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';

const activeSidebarItem = 'مشاهده دسترسی ها';

const breadcrumb = [{text: 'دسترسی ها', url: '', active: true}];

class Permissions extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">لیست دسترسی ها</div>
                        <div className='card-body'>
                            <Datatable url='api/permissions/' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withActiveSidebarItem(withBreadcrumb(Permissions, breadcrumb), activeSidebarItem);