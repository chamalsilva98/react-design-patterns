const reverseString = (str) => {
    let reverse = "";
    const length = str.length;
    for (let index = 0; index < length; index++) {
        const element = str[length - index - 1];
        reverse += element;
    }
    return reverse;
};

export default reverseString;
