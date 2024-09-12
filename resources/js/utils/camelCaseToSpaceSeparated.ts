export const camelCaseToSpaceSeparated = (str) => {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
};
