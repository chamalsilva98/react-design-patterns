// [1, 2, 3, 4, 5] and 2
const leftRotation = (array, count) => {
    const length = array.length;
    const rotatedArray = new Array(length);
    for (let index = 0; index < length; index++) {
        const position = count + index;
        let element;
        if (position < length) {
            // selecting from 3 to 5
            element = array[position];
        } else {
            // selecting from 1 to 2
            element = array[index - (length - count)];
        }
        rotatedArray[index] = element;
    }
    return rotatedArray;
};

const intensiveLeftRotation = (array, count) => {
    const clone = [...array];
    for (let index = 0; index < count; index++) {
        clone.push(clone.shift());
    }
    return clone;
};

console.log(leftRotation([1, 2, 3, 4, 5], 2));
