import React, { Component, Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // console.log('modal shouldComponentUpdate');
        return this.props.show !== nextProps.show || this.props.children !== nextProps.children;
    }

    componentWillUpdate() {
        // console.log('modal componentWillUpdate');
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className='Modal'
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Fragment>
        )

    }
}

export default Modal;