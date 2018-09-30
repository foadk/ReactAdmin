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

    onFormSubmit = (event) => {

        event.preventDefault();

        let formIsValid = true;
        const fields = JSON.parse(JSON.stringify(this.state.fields));
        for (let field in fields) {
            fields[field].valid = checkValidity(fields[field].value, fields[field].validation);
            fields[field].touched = true;
            formIsValid = formIsValid && fields[field].valid;
        }
        this.setState({ fields: fields });

        // if (!formIsValid) return;
        this.setState({ loading: true });
        const submitFields = this.getSubmitFields();
        Axios.post(this.props.submitURL, submitFields)
            .then(res => {
                this.resetForm();
                this.setState({ loading: false });
            }).catch(error => {
                this.setState({ loading: false });
            });
    }

    getSubmitFields = () => {
        const submitFields = {};
        const fields = JSON.parse(JSON.stringify(this.state.fields));
        for (let field in fields) {
            submitFields[field] = fields[field].value;
        }
        return submitFields;
    }

    resetForm = () => {
        const fields = JSON.parse(JSON.stringify(this.state.fields));
        for (let field in fields) {
            fields[field].touched = false;
            fields[field].valid = false;
            fields[field].value = this.props.fields[field].value;
        }
        this.setState({ fields: fields });
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
                            <form method="post" onSubmit={this.onFormSubmit}
                                className="form-horizontal" id={this.props.formId}>
                                {elements}
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                {this.props.buttons.map(button => (
                                    <Button form={button.form} cols={button.cols}
                                        type={button.type} icon={button.icon}
                                        classes={button.classes} spinning={loading}>{button.text}</Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={() => this.setState({ loading: !this.state.loading })} >load</button> */}
            </div >
        );
    }
}

export default withErrorHandler(Form, Axios);
// export default Form;