function twoElementsAddUpToTarget(nums, target) {
    if (!Array.isArray(nums)) throw new Error("nums must be an array");
    const lookup = {};
    for (const key in nums) {
        const diff = target - nums[key];
        if (lookup[diff]) {
            return [lookup[diff], key];
        } else {
            lookup[nums[key]] = key;
        }
    }
}

console.log(twoElementsAddUpToTarget([2, 7, 11, 15], 9));
console.log(twoElementsAddUpToTarget([3, 2, 4], 6));
console.log(twoElementsAddUpToTarget([3, 3], 6));
