import {getTimeFromStr, findCssColors,findHtmlComments,findHtmlTags,validateUsr,isLetter,
    isVowel} from "./regular_expressions"
describe("tests for the find functions", () => {
    it("returns time", () => {
        let str = "Завтрак в 09:00. Ужин в 21-30";
        expect(getTimeFromStr(str)).toBe("09:00,21-30");
    })
    it("returns the 6 digit css color", () => {
        let colors = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
        expect(findCssColors(colors)).toBe("#121212,#123456");
    })
    it("returns html comments", () => {
        let string = "... <!-- My -- comment test --> ..  <!----> ..";
        expect(findHtmlComments(string)).toBe("<!-- My -- comment test -->,<!---->")
    });
    it("returns html tags", () => {
        let strWithTags = '<> <a href="/"> <input type="radio" checked> <b>';
        expect(findHtmlTags(strWithTags)).toBe('<a href="/",<input type="radio" checked,<b');
    })
});
describe("tests for the validateUsr function", () => {
    it("returns true for a valid username", () => {
        expect(validateUsr('asddsa')).toBe(true);
        expect(validateUsr('____')).toBe(true);
        expect(validateUsr('p1pp1')).toBe(true);
        expect(validateUsr('asd43_34')).toBe(true);
    });
    it("returns false if username is invalid", () => {
        expect(validateUsr('a')).toBe(false);
        expect(validateUsr('Hass')).toBe(false);
        expect(validateUsr('Hasd_12assssssasasasasasaasasasasas')).toBe(false);
        expect(validateUsr('')).toBe(false);
        expect(validateUsr('012')).toBe(false);
        expect(validateUsr('asd43 34')).toBe(false);
    })
});
describe("tests for the isLetter function", () => {
    it("returns true", () => {
        expect(isLetter("a")).toBe(true);
        expect(isLetter("X")).toBe(true);
    })
    it("returns false", () => {
        expect(isLetter("")).toBe(false);
        expect(isLetter("7")).toBe(false);
        expect(isLetter("*")).toBe(false);
        expect(isLetter("ab")).toBe(false);
        expect(isLetter("a\n")).toBe(false);
    })
});
describe("tests for the isVovel function", () => {
    it("returns true", () => {
        expect(isVowel('a')).toBe(true);
        expect(isVowel('E')).toBe(true);
    });
    it("returns false", () => {
        expect(isVowel('')).toBe(false);
        expect(isVowel('ou')).toBe(false);
        expect(isVowel('z')).toBe(false);
        expect(isVowel('lol')).toBe(false);
    })
})

