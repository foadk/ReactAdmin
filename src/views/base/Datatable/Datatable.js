import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Axios from '../../../connection/axios';

import './Datatable.css';
import { prepHeaders } from '../../../utils/datatable';
import FontawesomeIcon from '../../../components/UI/fontawesomeIcon/fontawesomeIcon';

class Datatable extends Component {

    state = {
        headers: [],
        data: [],
        pages: -1,
        loading: true,
    }

    actionIcons = {
        delete: { icon: 'trash', title: 'حذف', click: (id) => this.onDeleteHandler(id) },
        edit: { icon: 'edit', title: 'ویرایش', click: () => null },
        quick_edit: { icon: 'pencil', title: 'ویرایش سریع', click: () => null },
    }

    componentDidMount() {
        Axios.get(this.props.url + 'datatable/headers')
            .then(res => {
                const headers = prepHeaders(res.data);
                this.setState({ headers: headers });
                this.setState({ loading: false });
            }).catch(err => {
            });
    }

    onDeleteHandler = (id) => {
        console.log(id);
        // const arrayCopy = this.state.data.filter((row) => row.id !== id);
        // this.setState({ data: arrayCopy });
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
            const rows = this.addActionsToRows(res.data.rows, this.state.headers.actions)
            this.setState({
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