import isSecondArraySquared from "../src/isSecondArraySquared";

describe("Check second array is doubled", () => {
    test("none array should throw an error", () => {
        expect(() => isSecondArraySquared({}, { key: "value" })).toThrow();
    });
    test("[1, 2, 3] and [4, 1, 9] shuld be true", () => {
        expect(isSecondArraySquared([1, 2, 3], [4, 1, 9])).toBeTruthy();
    });
    test("[1, 2, 3] and [1, 9] shuld be false", () => {
        expect(isSecondArraySquared([1, 2, 3], [1, 9])).toBeFalsy();
    });
    test("[1, 2, 1] and [4, 4, 1] shuld be false", () => {
        expect(isSecondArraySquared([1, 2, 1], [4, 4, 1])).toBeFalsy();
    });
});
