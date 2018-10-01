import React, { Component } from 'react';

import Button from './../formElements/Button';
import FormElement from '../formElements/FormElement';
import { checkValidity } from '../../../utils/validation';
import Axios from '../../../connection/axios';
import withErrorHandler from '../../../hoc/withErrorHandler';

class Form extends Component {

    state = {
        fields: this.props.fields,
        loading: false
    }

    componentDidMount() {
        console.log('componentDidMount');
        const fields = JSON.parse(JSON.stringify(this.props.fields));
        for (let field in fields) {
            fields[field].valid = false;
            fields[field].touched = false;
        }
        this.setState({ fields: fields });
    }

    onChangeHandler = (event, fieldId) => {

        const newFields = { ...this.state.fields };
        const newField = { ...newFields[fieldId] };

        newField.value = event.target.value;
        newField.valid = checkValidity(newField.value, newField.validation);
        newField.touched = true;

        newFields[fieldId] = newField;

        this.setState({ fields: newFields });
    };

    onFormSubmitHandler = (event) => {

        event.preventDefault();

        const submitFields = {};
        let formIsValid = true;
        const fields = JSON.parse(JSON.stringify(this.state.fields));
        for (let field in fields) {
            fields[field].valid = checkValidity(fields[field].value, fields[field].validation);
            fields[field].touched = true;
            formIsValid = formIsValid && fields[field].valid;
            submitFields[field] = fields[field].value;
        }
        this.setState({ fields: fields });

        if (!formIsValid) return;
        this.setState({ loading: true });
        const submitType = this.props.submitType ? this.props.submitType : 'post';
        Axios[submitType](this.props.submitURL, submitFields)
            .then(res => {
                this.setState({ loading: false });
                this.resetForm();
            }).catch(error => {
                this.setState({ loading: false });
            });
    }

    resetForm = () => {
        // const fields = JSON.parse(JSON.stringify(this.state.fields));
        // for (let field in fields) {
        //     fields[field].touched = false;
        //     fields[field].valid = false;
        //     fields[field].value = this.props.fields[field].value;
        // }
        // this.setState({ fields: fields });
        this.props.reset();
    }

    render() {

        const fieldsArray = [];
        let chunk = [];
        let cols = 0;
        const fields = JSON.parse(JSON.stringify(this.state.fields));
        for (let field in fields) {
            let fieldCols = fields[field].cols ? fields[field].cols : 6;
            cols += fieldCols;
            if (cols <= 12) {
                chunk.push({ id: field, config: this.state.fields[field] });
            }
            if (cols > 12) {
                fieldsArray.push(chunk);
                chunk = [];
                chunk.push({ id: field, config: this.state.fields[field] });
                cols = fieldCols;
            }
        }
        if (cols > 0) fieldsArray.push(chunk);

        const elements = fieldsArray.map((chunk, index) => (
            <div className="row" key={'chunk-' + index}>
                {chunk.map(field => (
                    <FormElement
                        changed={event => this.onChangeHandler(event, field.id)}
                        key={field.id}
                        field={field} />
                ))}
            </div>
        ));

        const { loading } = this.state

        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">
                            <strong>{this.props.formTitle}</strong>
                        </div>
                        <div className='card-block'>
                            <form method="post" onSubmit={this.onFormSubmitHandler}
                                className="form-horizontal" id={this.props.formId}>
                                {elements}
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                {this.props.buttons.map((button, index) => (
                                    <Button key={index} form={button.form} cols={button.cols}
                                        type={button.type} icon={button.icon} click={button.click}
                                        classes={button.classes} spinning={loading}>{button.text}</Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => this.props.changeKey()} >load</button>
            </div >
        );
    }
}

// export default withErrorHandler(Form, Axios);
export default Form;