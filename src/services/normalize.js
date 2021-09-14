
export const normalizeData = (arr, normalizeKey) => {

    const formateData = arr?.reduce((acc, curr) => {
        acc[curr[normalizeKey]] = curr;
        return acc;
    }, {});

    return formateData;
}

export const formatStr = str => {
    const upperLetter = str?.slice(0, 1).toUpperCase() + str?.slice(1);
    return upperLetter;
}
