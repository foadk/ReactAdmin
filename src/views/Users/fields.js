export const fields = {
    name: {
        elementType: 'text',
        label: 'نام',
        value: '',
        validation: {
            required: true,
            minLength: 2
        },
    },
    last_name: {
        elementType: 'text',
        label: 'نام خانوادگی',
        value: '',
        validation: {
            required: true,
            minLength: 2
        },
    },
    email: {
        elementType: 'email',
        label: 'ایمیل',
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
    },
    password: {
        elementType: 'password',
        label: 'رمز عبور',
        value: '',
        validation: {
            required: true,
            minLength: 3,
        },
    },
    sex: {
        elementType: 'select',
        label: 'جنسیت',
        value: 'male',
        options: [
            { value: 'male', text: 'آقا' },
            { value: 'female', text: 'خانم' }
        ],
        validation: {
            required: true
        },
    },
    national_id: {
        elementType: 'text',
        label: 'کد ملی',
        value: '',
        validation: {},
    },
    mobile: {
        elementType: 'text',
        label: 'تلفن',
        value: '',
        validation: {
            required: true
        },
    },
};