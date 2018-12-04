import React, { Component, Fragment } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
// import Axios from '../../../connection/axios';
// import Axios from '../../../connection/axiosWithTokenHeader';
import { withRouter } from 'react-router-dom';

import './Datatable.css';
import { prepHeaders, prepHeadersWithSections } from '../../../utils/datatable';
import FontawesomeIcon from '../../../components/UI/FontawesomeIcon/FontawesomeIcon';
import Modal from '../../../components/UI/Modal/Modal';
import Dialog from '../../../components/UI/Dialog/Dialog';
// import withErrorHandler from '../../../hoc/withErrorHandler';
import withResourceProvider from '../../../hoc/withResourceProvider';

class Datatable extends Component {

    state = {
        table: null,
        headers: [],
        data: [],
        pages: -1,
        loading: true,
        deleting: false,
        deletingItemId: null,
        error: null
    };

    componentDidUpdate() {
        const response = this.props.datatable;
        if (response) {
            this.props.deleteResponse('datatable');
            if ('datatableData' === response.title) {
                const data = response.data;
                const headers = prepHeaders(data.headers);
                // const headers = prepHeadersWithSections(res.data.headers);
                const rows = this.addActionsToRows(data.rows, data.headers.actions);
                this.setState({
                    table: data.table,
                    headers: headers,
                    data: rows,
                    pages: data.pages,
                    loading: false,
                });
            }
            if ('delete' === response.title) {
                this.selectTable.fireFetchData();
                this.setState({
                    deleting: false,
                    deletingItemId: null
                });
            }
        }
    }

    actionIcons = {
        delete: { icon: 'trash', title: 'حذف', click: (id) => this.deleteIconClickedHandler(id) },
        edit: { icon: 'edit', title: 'ویرایش', click: (id) => this.redirectToEidtPage(id) },
        quick_edit: { icon: 'pencil', title: 'ویرایش سریع', click: () => { } },
    };

    redirectToEidtPage = (id) => {
        this.props.history.push('/' + this.props.route + '/edit/' + id);
    };

    deleteIconClickedHandler = (id) => {
        this.setState({
            deleting: true,
            deletingItemId: id
        });
    };

    deleteRow = (id) => {

        const request = {
            method: 'delete',
            url: 'api/' . this.props.route + '/' + id,
        };

        this.props.prepareRequest(request, 'datatable', 'delete');
    };

    deleteCanceledHandler = () => {
        this.setState({ deleting: false });
    };

    addActionsToRows = (rows, actions) => {
        const newRows = rows.map(row => {
            for (const action in actions) {
                row[action] = <FontawesomeIcon
                    icon={this.actionIcons[action].icon}
                    title={this.actionIcons[action].title}
                    iconClicked={() => this.actionIcons[action].click(row[this.state.table + '.id'])}
                    classes="pointer" />;
            }
            return row;
        });
        return newRows;
    };

    fetchData = (state, instance) => {
        this.setState({ loading: true });

        const request = {
            method: 'post',
            url: 'api/' + this.props.route + '/' + 'datatable',
            data: {
                page: state.page,
                pageSize: state.pageSize,
                sorted: state.sorted,
                filtered: state.filtered
            }
        };

        this.props.prepareRequest(request, 'datatable', 'datatableData');
    };

    render() {
        return (
            <Fragment>
                <Modal show={this.state.deleting} modalClosed={this.deleteCanceledHandler} >
                    <Dialog buttons={[
                        { title: 'حذف', type: 'danger', click: () => this.deleteRow(this.state.deletingItemId) },
                        { title: 'انصراف', type: 'default', click: () => this.deleteCanceledHandler() },
                    ]}>آیا از حذف آیتم با شناسه {this.state.deletingItemId} اطمینان دارید؟</Dialog>
                </Modal>
                <ReactTable
                    getTableProps={() => ({ style: { display: 'block' } })}
                    ref={(r) => {
                        this.selectTable = r;
                    }}
                    manual
                    columns={this.state.headers}
                    data={this.state.data}
                    pages={this.state.pages}
                    loading={this.state.loading}
                    defaultSorted={this.state.sorted}
                    defaultFiltered={this.state.filtered}
                    onFetchData={this.fetchData}
                    defaultPageSize={10}
                    filterable={true}
                    className="-striped -highlight datatable-rtl"
                    previousText='قبلی'
                    nextText='بعدی'
                    pageText='صفحه'
                    ofText='از'
                    rowsText='سطر'
                    loadingText='بارگذاری...'
                    noDataText='سطری یافت نشد.'
                />
            </Fragment>
        );
    }
}

export default withRouter(withResourceProvider(Datatable, 'datatable'));