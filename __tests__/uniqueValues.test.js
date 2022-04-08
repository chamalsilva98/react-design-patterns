import uniqueValues from "../src/uniqueValues";

describe("Unique values", () => {
    test("none array should throw an error", () => {
        expect(() => uniqueValues({ key: "value" })).toThrow();
    });
    test("[1, 1, 1, 1, 2] should output [1, 2]", () => {
        expect(uniqueValues([1, 1, 1, 1, 2])).toEqual([1, 2]);
    });
    test("[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] should output [1, 2, 3, 4, 7, 12, 13]", () => {
        expect(uniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual([
            1, 2, 3, 4, 7, 12, 13,
        ]);
    });
    test("[] should output [0]", () => {
        expect(uniqueValues([])).toEqual([0]);
    });
});
