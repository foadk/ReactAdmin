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
    news_cat_id: {
        elementType: 'select',
        label: 'گروه',
        value: '',
        options: [],
        validation: {
            required: true
        },
    },
    description: {
        elementType: 'textArea',
        label: 'توضیحات',
        value: '',
        validation: {},
        cols: 12,
    },
    content: {
        elementType: 'textEditor',
        label: 'متن',
        value: '',
        validation: {},
    },
    position: {
        elementType: 'number',
        label: 'موقعیت',
        value: '',
        validation: {},
    },
    display: {
        elementType: 'checkbox',
        label: 'مشاهده',
        value: false,
        validation: {},
    },
};