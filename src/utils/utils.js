export function capitalizeFirstLetter(string) {
    var parts = string.split('_');
    parts = parts.map(subString => subString.charAt(0).toUpperCase() + subString.slice(1));
    return parts.join(' ');
}

// make a tree for antd tree select component
export const makeTree = (source, parentId) => {
    source = _prepare(source);
    const result = [];
    const references = []
    while (source.length) {
        const sourceCopy = JSON.parse(JSON.stringify(source));
        sourceCopy.forEach(element => {
            if (element[parentId] !== null) {
                const indexOfElement = references.findIndex(item => item.id === element[parentId]);
                if (indexOfElement !== -1) {
                    references.push(element);
                    if (!('children' in references[indexOfElement])) {
                        references[indexOfElement].children = [];
                    }
                    references[indexOfElement].children.push(element); // also pushes to results.
                    _removeItemFromArray(element, source);
                }
            } else {
                result.push(element);
                references.push(element);
                _removeItemFromArray(element, source);
            }
        });
    }
    return result;
}

const _prepare = (data) => {
    const result = data.map(element => {
        element.key = element.id;
        element.value = element.id;
        return element;
    })
    return result;
};

const _removeItemFromArray = (item, array) => {
    const index = array.findIndex(element => element.key === item.key);
    array.splice(index, 1);
}

export const updateObject = (state, newState) => {
    return {
        ...state,
        ...newState
    }
}