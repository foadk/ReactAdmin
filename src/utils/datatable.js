const headerSectionTitles = {
    'main': 'مشخصات',
    'actions': 'عملیات',
};

const columnSizes = {
    id: 60,
    email: 220
}

export const prepHeaders = (headerData) => {
    const headers = [];
    for (const section in headerData) {
        const columns = [];
        for (const header in headerData[section]) {
            const newHeader = { accessor: header }
            if (section !== 'actions') {
                newHeader['Header'] = headerData[section][header];
            } else {
                newHeader['Header'] = '';
                newHeader['width'] = 40;
                newHeader['filterable'] = false;
            }
            if(header in columnSizes) {
                newHeader['width'] = columnSizes[header];
            }
            columns.push(newHeader);
        }
        headers.push({
            Header: headerSectionTitles[section],
            columns: columns
        });
    }
    return headers;
};