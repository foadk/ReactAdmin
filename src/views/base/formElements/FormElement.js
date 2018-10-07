import React from 'react';

import Input from './Input';
import Select from './Select';
import TextEditor from './TextEditor';
import TextArea from './TextArea';
import CheckBox from './CheckBox';

const formElement = (props) => {
    let element = null;
    switch (props.field.config.elementType) {
        case 'text':
        case 'email':
        case 'password':
        case 'number':
            element = <Input
                {...props.field.config}
                id={props.field.id}
                changed={props.changed} />;
            break;
        case 'select':
            element = <Select
                {...props.field.config}
                id={props.field.id}
                changed={props.changed} />;
            break;
        case 'textEditor':
            element = <TextEditor
                {...props.field.config}
                id={props.field.id}
                changed={props.changed} />;
            break;
        case 'textArea':
            element = <TextArea
                {...props.field.config}
                id={props.field.id}
                changed={props.changed} />;
            break;
        case 'checkbox':
            element = <CheckBox
                {...props.field.config}
                id={props.field.id}
                changed={props.changed} />;
            break;
        default:
            element = null;
    }
    return element;
}

export default formElement;