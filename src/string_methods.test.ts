import {concat} from "./string_methods"
describe("tests for the concat function", () => {
    it("concatenates strings and returns a new string", () => {
        const str1 = 'Hello';
        const str2 = 'World';
        expect(concat(str1, str2)).toBe("HelloWorld");
        expect(concat(str2, ", ", str1)).toBe("World, Hello");
    });
    it("concat with non strings", () => {
        expect(concat("", {})).toStrictEqual("[object Object]")
        expect(concat("", [])).toStrictEqual("");
        expect(concat("", null)).toStrictEqual("null");
        expect(concat("", true)).toStrictEqual("true");
        expect(concat("", 4,5)).toStrictEqual("45");
        expect(concat("")).toBe("");
    })
})
