/**
 *
 * @param {number[]} firstArray
 * @param {number[]} secondArray
 */
const isSecondArraySquared = (firstArray, secondArray) => {
    // Validating inputs to be arrays
    if (!Array.isArray(firstArray) || !Array.isArray(secondArray))
        throw new Error("arguments must be arrays");

    // Check whether array lengths are equal
    if (firstArray.length !== secondArray.length) return false;

    const lookUp = {};

    // Looping through the array - O(n)
    for (const iterator of firstArray) {
        const squaredValue = iterator * iterator;
        // Mapping the squared value with it frequency
        if (lookUp[squaredValue]) {
            lookUp[squaredValue] += 1;
        } else {
            lookUp[squaredValue] = 1;
        }
    }

    for (const iterator of secondArray) {
        // Look for the squared value
        if (lookUp[iterator]) {
            // Delete the property if frequency is one else reduce the frequency
            if (lookUp[iterator] === 1) {
                delete lookUp[iterator];
            } else {
                lookUp[iterator] -= 1;
            }
        } else {
            return false;
        }
    }

    // Check whether lookup object is empty or not
    return !Object.keys(lookUp).length;
};

export default isSecondArraySquared;
