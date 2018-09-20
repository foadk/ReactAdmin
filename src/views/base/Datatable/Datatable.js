import React, { Component, Fragment } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Axios from '../../../connection/axios';

import './Datatable.css';
import { prepHeaders } from '../../../utils/datatable';
import FontawesomeIcon from '../../../components/UI/FontawesomeIcon/FontawesomeIcon';
import Modal from '../../../components/UI/Modal/Modal';
import Dialog from '../../../components/UI/Dialog/Dialog';

class Datatable extends Component {

    state = {
        headers: [],
        data: [],
        pages: -1,
        loading: true,
        deleting: false,
        deletingItemId: null
    }

    actionIcons = {
        delete: { icon: 'trash', title: 'حذف', click: (id) => this.deleteIconClickedHandler(id) },
        edit: { icon: 'edit', title: 'ویرایش', click: () => { } },
        quick_edit: { icon: 'pencil', title: 'ویرایش سریع', click: () => { } },
    }

    deleteIconClickedHandler = (id) => {
        this.setState({
            deleting: true,
            deletingItemId: id
        });
    }

    deleteRow = (id) => {
        Axios.delete(this.props.url + id)
            .then(res => {
                this.selectTable.fireFetchData();
                this.setState({
                    deleting: false,
                    deletingItemId: null
                });
            }).catch(err => {
                console.log(err);
                this.setState({
                    deleting: false,
                    deletingItemId: null
                });
            });
        // const arrayCopy = this.state.data.filter((row) => row.id !== id);
        // this.setState({ data: arrayCopy });
    }

    deleteCanceledHandler = () => {
        this.setState({deleting: false});
    }

    addActionsToRows = (rows, actions) => {
        const newRows = rows.map(row => {
            for (const action in actions) {
                row[action] = <FontawesomeIcon
                    icon={this.actionIcons[action].icon}
                    title={this.actionIcons[action].title}
                    iconClicked={() => this.actionIcons[action].click(row['id'])}
                    classes="pointer" />;
            }
            return row;
        });
        return newRows;
    }

    fetchData = (state, instance) => {
        this.setState({ loading: true });
        Axios.post(this.props.url + 'datatable', {
            page: state.page,
            pageSize: state.pageSize,
            sorted: state.sorted,
            filtered: state.filtered
        }).then((res) => {
            const headers = prepHeaders(res.data.headers);
            const rows = this.addActionsToRows(res.data.rows, res.data.headers.actions);
            this.setState({
                headers: headers,
                data: rows,
                pages: res.data.pages,
                loading: false,
            });
        }).catch(err => {
            console.log(err);
        });
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

export default Datatable;