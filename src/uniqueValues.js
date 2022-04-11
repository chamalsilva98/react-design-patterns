/**
 *
 * @param {number[]} array
 */
const uniqueValues = (array) => {
    if (!Array.isArray(array)) throw new Error("argument must be an array");
    if (array.length === 0) return [0];

    return [...new Set(array)]
};

export default uniqueValues;
