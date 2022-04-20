/**
 *
 * @param {number[]} array
 */
const uniqueValues = (array) => {
    // Validates to be an array
    if (!Array.isArray(array)) throw new Error("argument must be an array");
    // If there is one element return it
    if (array.length === 0) return [0];

    const map = new Map();

    // Looping through the array and creting an object where key is the array element and value is the frequency
    for (const iterator of array) {
        if (map.has(iterator)) {
            map.set(iterator, map.get(iterator) + 1);
        } else {
            map.set(iterator, 1);
        }
    }

    // Creating an array from keys in the map
    return Array.from(map.keys());
};

export default uniqueValues;
