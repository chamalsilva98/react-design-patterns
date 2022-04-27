const intersection = (nums1, nums2) => {
    // Validate inputs to be arrays
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new Error("Inputs must be arrays");
    }

    // [ref to the largest array, string to identify the minimum array, minimum length]
    const [largeArray, comparator, minLength] =
        nums1.length > nums2.length
            ? [nums1, "nums2", nums2.length]
            : [nums2, "nums1", nums1.length];

    const lookup = {};

    const intersectionValues = [];

    // looping through both arrays till the minimum array ends
    for (let index = 0; index < minLength; index++) {
        const ele1 = nums1[index];
        const ele2 = nums2[index];

        // checking if the element is in the lookup and checking if it is from the other array
        if (lookup[ele1] === "nums2") {
            // setting true to indicate the element is found in both
            lookup[ele1] = true;
            intersectionValues.push(ele1);
        } else if (lookup[ele1] !== true) {
            // setting the element in lookup and string to indicate from which array it is
            lookup[ele1] = "nums1";
        }

        if (lookup[ele2] === "nums1") {
            lookup[ele2] = true;
            intersectionValues.push(ele2);
        } else if (lookup[ele2] !== true) {
            lookup[ele2] = "nums2";
        }
    }

    for (let index = minLength; index < largeArray.length; index++) {
        const ele = largeArray[index];
        if (lookup[ele] === comparator) {
            lookup[ele] = true;
            intersectionValues.push(ele);
        }
    }

    return intersectionValues;
};

Array.prototype.intersection = function (nums) {
    return intersection(this, nums);
};

export default intersection;
