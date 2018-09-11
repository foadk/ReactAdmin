import React, { Component } from 'react';
import Datatable from '../base/Datatable/Datatable';

class Users extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div class="card-header">لیست کاربران</div>
                        <div className='card-body'>
                            <Datatable url='api/users/datatable' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;