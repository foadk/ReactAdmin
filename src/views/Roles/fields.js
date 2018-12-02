export const fields = {
    title: {
        elementType: 'text',
        label: 'عنوان',
        value: '',
        validation: {
            required: true,
            minLength: 2
        },
    },
    position: {
        elementType: 'number',
        label: 'موقعیت',
        value: '',
        validation: {},
    },
    permission_group_ids: {
        elementType: 'multiSelect',
        label: 'دسترسی ها',
        items: [],
        value: [],
        validation: {
            required: true
        },
    },
};