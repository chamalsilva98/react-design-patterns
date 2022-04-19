import isSecondArraySquared from "../src/isSecondArraySquared";

describe("Check second array is squared", () => {
    test("none array should throw an error", () => {
        expect(() => isSecondArraySquared({}, { key: "value" })).toThrow();
    });
    test("[1, 2, 3] and [4, 1, 9] should be true", () => {
        expect(isSecondArraySquared([1, 2, 3], [4, 1, 9])).toBeTruthy();
    });
    test("[1, 2, 3] and [1, 9] should be false", () => {
        expect(isSecondArraySquared([1, 2, 3], [1, 9])).toBeFalsy();
    });
    test("[1, 2, 1] and [4, 4, 1] should be false", () => {
        expect(isSecondArraySquared([1, 2, 1], [4, 4, 1])).toBeFalsy();
    });
});
