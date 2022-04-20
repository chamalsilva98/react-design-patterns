const intersection = (nums1, nums2) => {
    // Validate inputs to be arrays
    if (!Array.isArray(nums1) || !Array.isArray(nums2))
        throw new Error("Inputs must be arrays");

    const map = new Map();

    // Creating a map uniques keys and set values as false - O(n)
    for (const iterator of nums1) {
        if (!map.has(iterator)) map.set(iterator, false);
    }

    const intersectionValues = [];

    // Looping through second array and check whether an element exists in the map and if so set it value to true (so it won't repeat) and push to an array - O(n)
    for (const iterator of nums2) {
        if (map.has(iterator) && !map.get(iterator)) {
            map.set(iterator, true);
            intersectionValues.push(iterator);
        }
    }

    return intersectionValues;
};

Array.prototype.intersection = function (nums) {
    return intersection(this, nums);
};

export default intersection;
