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
    role_ids: {
        elementType: 'multiSelectDropdown',
        label: 'گروه های کاربری',
        items: [],
        value: [],
        validation: {
            required: true
        },
    },
};