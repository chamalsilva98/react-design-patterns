String.prototype.reverseString = function () {
    const str = this;
    let reverse = "";
    const length = str.length;
    for (let index = 0; index < length; index++) {
        const element = str[length - index - 1];
        reverse += element;
    }
    return reverse;
};
