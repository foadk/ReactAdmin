import React, { Component } from 'react';
import Datatable from '../base/Datatable/Datatable';

class Users extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">لیست کاربران</div>
                        <div className='card-body' style={{padding: '7px'}}>
                            <Datatable url='api/users/' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;