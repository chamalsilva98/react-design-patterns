const intersection = (nums1, nums2) => {
    // Validate inputs to be arrays
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new Error("Inputs must be arrays");
    }
    
    const output = []; 
    
    for(let i = 0; i < nums1.length; i++) if(nums1.indexOf(nums2[i]) !== -1) output.push(nums1[i]);
    return output;
};

Array.prototype.intersection = function (nums) {
    return intersection(this, nums);
};

export default intersection;
