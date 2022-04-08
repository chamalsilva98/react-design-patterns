/**
 *
 * @param {string} firstString
 * @param {string} secondString
 */
const areAnagrams = (firstString, secondString) => {
    if (typeof firstString !== "string" || typeof secondString !== "string")
        throw new Error("arguments must be strings");

    if (firstString.length !== secondString.length) return false;

    firstString = firstString.split("").sort();
    secondString = secondString.split("").sort();

    for (const key in firstString) {
        if (firstString[key] !== secondString[key]) return false;
    }

    return true;
};

export default areAnagrams;
