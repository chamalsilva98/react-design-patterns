/**
 *
 * @param {number[]} firstArray
 * @param {number[]} secondArray
 */
const isSecondArraySquared = (firstArray, secondArray) => {
    if (!Array.isArray(firstArray) || !Array.isArray(secondArray))
        throw new Error("arguments must be arrays");

    if (firstArray.length !== secondArray.length) return false;

    firstArray.sort();
    secondArray.sort();

    for (const index in firstArray) {
        let diff = firstArray[index] * firstArray[index] - secondArray[index];
        if (diff !== 0) return false;
    }
    return true;
};

export default isSecondArraySquared;
