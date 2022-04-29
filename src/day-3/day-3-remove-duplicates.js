const removeDuplicates = (array) => {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array");
    }

    const lookup = {};

    const uniques = [];

    for (const iterator of array) {
        if (!lookup[iterator]) {
            lookup[iterator] = true;
            uniques.push(iterator);
        }
    }

    return uniques;
};

export default removeDuplicates;
