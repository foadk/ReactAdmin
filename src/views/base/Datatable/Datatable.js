import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Axios from '../../../connection/axios';

import './Datatable.css'
// import Link from './Link';

class Datatable extends Component {

    state = {
        header: [],
        data: [],
        pages: -1,
        loading: true,
        sorted: [],
        filtered: []
    }

    onDeleteHandler = (id) => {
        const arrayCopy = this.state.data.filter((row) => row.id !== id);
        this.setState({ data: arrayCopy });
    }

    fetchData = (state, instance) => {
        this.setState({ loading: true });
        Axios.post(this.props.url, {
            page: state.page,
            pageSize: state.pageSize,
            sorted: state.sorted,
            filtered: state.filtered
        }).then((res) => {
            this.setState({
                data: res.data.data,
                pages: res.data.pages,
                // sorted: res.data.sorted,
                // filtered: res.data.filtered,
                loading: false,
                header: res.data.header
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
                columns={this.state.header}
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