import areAnagrams from "../src/areAnagrams";

describe("Anagrams", () => {
    test("none string should throw an error", () => {
        expect(() => areAnagrams(1, 2)).toThrow();
    });
    test("CINEMA and ICEMAN should be true", () => {
        expect(areAnagrams("CINEMA", "ICEMAN")).toBeTruthy();
    });
    test("empty string should be true", () => {
        expect(areAnagrams("", "")).toBeTruthy();
    });
    test("AAZ and ZZA should be false", () => {
        expect(areAnagrams("AAZ", "ZZA")).toBeFalsy();
    });
    test("ANAGRAM and NAGRAM should be true", () => {
        expect(areAnagrams("ANAGRAM", "NAGARAM")).toBeTruthy();
    });
    test("RAT and CAR should be false", () => {
        expect(areAnagrams("RAT", "CAR")).toBeFalsy();
    });
    test("AWESOME and AWESOM should be false", () => {
        expect(areAnagrams("AWESOME", "AWESOM")).toBeFalsy();
    });
    test("QWERTY and QEYWRT should be true", () => {
        expect(areAnagrams("QWERTY", "QEYWRT")).toBeTruthy();
    });
    test("TEXTTWISTTIME and TIMETWISTTEXT should be true", () => {
        expect(areAnagrams("TEXTTWISTTIME", "TIMETWISTTEXT")).toBeTruthy();
    });
});
