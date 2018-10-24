import React, { Component } from 'react';

import Button from './../formElements/Button';
import FormElement from '../formElements/FormElement';
import { checkValidity } from '../../../utils/validation';
import withResourceProvider from '../../../hoc/withResourceProvider';
// import Axios from '../../../connection/axiosWithTokenHeader';
// import withErrorHandler from '../../../hoc/withErrorHandler';

class Form extends Component {

    state = {
        fields: this.props.fields,
        loading: false
    }

    componentDidMount() {
        const fields = JSON.parse(JSON.stringify(this.props.fields));
        for (let field in fields) {
            fields[field].valid = false;
            fields[field].touched = false;
        }
        this.setState({ fields: fields });
    }

    componentDidUpdate() {
        const response = this.props.form;
        if (response) {
            this.props.deleteResponse('form');
            if ('submit' === response.title) {
                this.setState({ loading: false });
                this.resetForm();
            }
        }
    }

    onChangeHandler = (event, fieldId) => {

        const newFields = { ...this.state.fields };
        const newField = { ...newFields[fieldId] };

        newField.value = newField.elementType === 'checkbox' ? event.target.checked : event.target.value;
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

        // if (!formIsValid) return;
        this.setState({ loading: true });
        const submitType = this.props.submitType ? this.props.submitType : 'post';

        const request = {
            method: submitType,
            url: this.props.submitURL,
            data: submitFields
        };

        this.props.prepareRequest(request, 'form', 'submit');

        // Axios[submitType](this.props.submitURL, submitFields)
        //     .then(res => {
        //         this.setState({ loading: false });
        //         this.resetForm();
        //     }).catch(error => {
        //         this.setState({ loading: false });
        //     });
    }

    resetForm = () => {
        this.props.reset();
    }

    render() {

        const fieldsArray = [];
        let chunk = [];
        let cols = 0;
        // console.log(this.state.fields);
        const fields = JSON.parse(JSON.stringify(this.state.fields));
        for (let field in fields) {
            let fieldCols = 6;
            if(fields[field].elementType == 'textEditor') fieldCols = 12;
            if(fields[field].cols) fieldCols = fields[field].cols;
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
export default withResourceProvider(Form, 'form');