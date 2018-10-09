import React, { Component } from 'react';
import Datatable from '../base/Datatable/Datatable';
import withBreadcrumb from '../../hoc/withBreadcrumb';

class Users extends Component {

    breadcrumb = [{text: 'اخبار', url: '', active: true}];

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">لیست اخبار</div>
                        <div className='card-body'>
                            <Datatable url='api/news/' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withBreadcrumb(Users);