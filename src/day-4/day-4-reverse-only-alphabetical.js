const isAlphabetical = (char) => {
    return /[a-zA-Z]/.test(char);
};

const reverseOnlyAlphabetical = (str) => {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }

    const charArray = str.split("");

    let i = 0,
        j = charArray.length - 1,
        swap;

    while (true) {
        while (!isAlphabetical(charArray[i])) {
            i++;
            if (i == charArray.length) {
                return str;
            }
        }
        while (!isAlphabetical(charArray[j])) {
            j--;
        }
        if (i >= j) break;
        swap = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = swap;
        i++;
        j--;
    }
    return charArray.join();
};

export default reverseOnlyAlphabetical;
