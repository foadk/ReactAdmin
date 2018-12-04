import React, { Component } from 'react';

const asyncComponent = (importComponent, NamedExport = null) => {
    NamedExport = NamedExport ? NamedExport : 'default';
    return class extends Component {

        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({ component: cmp[NamedExport] })
                });
        }

        render() {
            const C = this.state.component
            return C ? <C {...this.props} /> : null
        }
    }
}

export default asyncComponent