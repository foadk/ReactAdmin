import React from 'react';

const withValidation = (WrappedComponent) => {
    return (props) => {
        let validationClass = "";
        if (props.touched && !props.valid) validationClass = " has-danger";
        if (props.touched && props.valid) validationClass = " has-success";
        return <WrappedComponent {...props} validationClass={validationClass} />;
    };
};

export default withValidation;