export function capitalizeFirstLetter(string) {
    var parts = string.split('_');
    parts = parts.map(subString => subString.charAt(0).toUpperCase() + subString.slice(1));
    return parts.join(' ');
}