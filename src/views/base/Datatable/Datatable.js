import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Axios from '../../../connection/axios';
import {addActionsToRows, prepHeaders} from '../../../utils/datatable';

import './Datatable.css'
// import Link from './Link';

class Datatable extends Component {

    state = {
        headers: [],
        data: [],
        pages: -1,
        loading: true,
    }

    onDeleteHandler = (id) => {
        const arrayCopy = this.state.data.filter((row) => row.id !== id);
        this.setState({ data: arrayCopy });
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
            const rows = addActionsToRows(res.data.rows, res.data.headers.actions)
            console.log(headers);
            console.log(rows);
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
        );
    }
}

export default Datatable;