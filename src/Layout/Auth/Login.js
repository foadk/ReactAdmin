import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Auth.css';
import * as actions from '../../store/actions/index';

class Login extends Component {

    state = {
        email: null,
        password: null,
    }

    inputChangeHandler = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    };

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        this.props.getAccessToken(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group">
                            <form onSubmit={this.onFormSubmitHandler}>
                                <div className="card p-4">
                                    <div className="card-body">
                                        <h1>ورود</h1>
                                        <p className="text-muted">وارد حساب کاربری خود شوید</p>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="icon-user" />
                                                </span>
                                            </div>
                                            <input className="form-control" type="text" name="email" placeholder="ایمیل" onChange={this.inputChangeHandler} />
                                        </div>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="icon-lock" />
                                                </span>
                                            </div>
                                            <input className="form-control" type="password" name="password" placeholder="رمز عبور" onChange={this.inputChangeHandler} />
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <button className="btn btn-primary px-4" type="submit">ورود</button>
                                            </div>
                                            <div className="col-6 text-right">
                                                <button className="btn btn-link px-0" type="button">رمز عبور خود را فراموش کرده اید؟</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                                    <div className="card-body text-center">
                                        <div>
                                            <h2>عضویت</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <button className="btn btn-primary active mt-3">عضو شوید!</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAccessToken: (username, password) => dispatch(actions.getAccessToken(username, password))
    }
}

export default connect(null, mapDispatchToProps)(Login);