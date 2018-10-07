export const checkValidity = (value, rules) => {

    if (!rules) return true

    let isValid = true;

    if (rules.required) {
        isValid = isValid && (String(value).trim() !== '');
    }
    if (rules.minLength) {
        isValid = isValid && (value.length >= rules.minLength);
    }
    if (rules.maxLength) {
        isValid = isValid && (value.length <= rules.maxLength);
    }
    if (rules.isEmail) {
        const patern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = isValid && patern.test(value);
    }
    if (rules.isNumeric) {
        const patern = /^\d=$/;
        isValid = isValid && patern.test(value);
    }

    return isValid;
};