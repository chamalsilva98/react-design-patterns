const reverseString = (str) => {
    // Validating to be a string
    if (typeof str !== "string") throw new Error("Input must be string");

    let reverse = "";
    const length = str.length;
    // Looping through the string, time complexity - O(n)
    for (let index = 0; index < length; index++) {
        // Getting elements from the end of the string iteratively
        const element = str[length - index - 1];
        // Appending elements in reverse order, space complexity - O(n)
        reverse += element;
    }
    return reverse;
};

export default reverseString;
