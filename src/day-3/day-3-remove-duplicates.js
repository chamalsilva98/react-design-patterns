const removeDuplicates = (array) => {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array");
    }

    const lookup = {};
    for(let item of array) if(!lookup[item]) lookup[item] = 1;
        
    return Object.keys(lookup);
    
    //const uniques = [];

    /*
    for (const iterator of array) {
        if (!lookup[iterator]) {
            lookup[iterator] = true;
            uniques.push(iterator);
        }
    }
    */
    
};

export default removeDuplicates;
