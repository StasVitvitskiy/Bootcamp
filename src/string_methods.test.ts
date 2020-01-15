import {concat, endsWith,includes,indexOf,lastIndexOf,padEnd, padStart, repeat, slice, split, startsWith,
substring,trim,trimStart, trimEnd} from "./string_methods"
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
});
describe("tests for the endsWith function", () => {
    it("returns true if the string ends with the characters of a specified string", () => {
        const str1 = 'Cats are the best?:::?!';
        expect(endsWith(str1,'best', 17)).toBe(true);
        expect(endsWith("", '')).toBe(true);
    });
    it("returns false if the string does not end with the characters of a specified string", () => {
        const str2 = 'Is this a question';
        expect(endsWith(str2, '?')).toBe(false);
        expect(endsWith("", '?')).toBe(false);
    })
});
describe("tests for the includes function", () => {
    it("returns true if one string may be found within another string", () => {
        const sentence = 'The quick brown fox jumps over the lazy dog.';
        const word = 'fox';
        expect(`The word ${word} ${includes(sentence, word, 7) ? "is" : "is not"} in the sentence`)
            .toBe("The word fox is in the sentence");
        expect(includes(sentence, "g", 12)).toBe(true);
        expect(includes(sentence, "T")).toBe(true);
        expect(includes(sentence, ".")).toBe(true);
    });
    it("return false", () => {
        expect(includes("Blue Whale", "blue")).toBe(false);
        expect(includes("", "b")).toBe(false);
    })
});
describe("tests for the indexOf function", () => {
    it("returns the index of the first occurrence of the specified value", () => {
        const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
        const searchTerm = 'dog';
        const greeting = 'hello world';
        expect(indexOf(paragraph, searchTerm)).toBe(40);
        expect(`The index of the first ${searchTerm} from the beginning is ${indexOf(paragraph, searchTerm)}`)
            .toBe("The index of the first dog from the beginning is 40");
        expect(indexOf("Blue Whale", "Blue")).toBe(0);
        expect(indexOf("Blue Whale", " ")).toBe(4);
        expect(indexOf(greeting, "")).toBe(0);
        expect(indexOf(greeting, "", 0)).toBe(0);
        expect(indexOf(greeting, "", 3)).toBe(3);
        expect(indexOf(greeting, "", 11)).toBe(11);
        expect(indexOf(greeting, "", 13)).toBe(11);
        const str = 'To be, or not to be, that is the question.';
        let count = 0;
        let position = indexOf(str, 'e');
        while (position !== -1) {
            count++;
            position = indexOf(str, 'e', position + 1);
        }
        expect(count).toBe(4);
    });
    it("returns -1 if the value was not found", () => {
        expect(indexOf("str", ">")).toBe(-1);
        expect(indexOf("str", "str", 4)).toBe(-1);
        expect(indexOf("str", "")).toBe(0);
    })
});
describe("tests for the lastIndexOf function", () => {
    it("returns the index of the last occurrence of the specified value, searching backwards from fromIndex.", () => {
        const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
        const searchTerm = 'dog';
        expect(lastIndexOf(paragraph, searchTerm)).toBe(52);
        expect(lastIndexOf(paragraph, "T")).toBe(0);
        expect(lastIndexOf(paragraph, "?")).toBe(82);
    });
    it("returns the from argument if the searchValue is empty", () => {
        const word = 'canal';
        expect(lastIndexOf(word, "")).toBe(5);
        expect(lastIndexOf(word, "", 2)).toBe(2);
        expect(lastIndexOf(word, "", 3)).toBe(3);
        expect(lastIndexOf(word, "", 33)).toBe(5);
        expect(lastIndexOf(word, "", -33)).toBe(0);
    });
    it("returns -1 when the specified value was not found in the string", () => {
        expect(lastIndexOf('Blue Whale, Killer Whale', 'blue')).toBe(-1);
        expect(lastIndexOf('Blue Whale, Killer Whale', '.')).toBe(-1);
    })
});
describe("tests for the padEnd function", () => {
    it("pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length", ()=> {
        const str1 = 'Breaded Mushrooms';
        const str2 = '200';
        expect(padEnd(str1, 25, ".")).toBe("Breaded Mushrooms........");
        expect(padEnd(str2, 5)).toBe("200  ");
        expect(padEnd("abc", 10, "foo")).toBe("abcfoofoof");
        expect(padEnd("abc", 10)).toBe("abc       ");
        expect(padEnd("abc", 6, "123abc")).toBe("abc123");
        expect(padEnd("abc", 1)).toBe("abc");
        expect(padEnd("abc", -1)).toBe("abc");
        expect(padEnd(123, -1)).toBe("123");
        expect(padEnd("abc", 20, "")).toBe("abc");
        expect(padEnd("", 5)).toBe("     ");
    })
});
describe("tests for the padStart function", () => {
    it("pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length", () => {
        expect(padStart("5", 2, "0")).toBe("05");
        const fullNumber = '2034399002125581';
        const lastFour = fullNumber.slice(-4);
        expect(padStart(lastFour, fullNumber.length, "*")).toBe("************5581");
    });
    it("returns the current string if another string is an empty string", () => {
        expect(padStart("abc", 2, "")).toBe("abc");
        expect(padStart("abc", "")).toBe("abc");
    })
})
describe("tests for the repeat function", () => {
    it("constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together", () => {
        const chorus = 'Because I\'m happy. ';
        expect(repeat(chorus, 27)).toBe("Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. ");
        expect(repeat("abc", 3.5)).toBe("abcabcabc");
    });
    it("returns RangeError if count < 0 || count == Infinity", () => {
        expect(() => repeat("abc", -1)).toThrow(new RangeError("repeat count must be non negative"));
        expect(() => repeat("abc", Infinity)).toThrow(new RangeError("repeat must be less than infinity"));
    });
    it("returns an empty string", () => {
        expect(repeat("abc", 0)).toBe("");
    })
});
describe("tests for the slice function", () => {
    it("extracts a section of a string and returns it as a new string", () => {
        const str = 'The quick brown fox jumps over the lazy dog.';
        let str1 = 'The morning is upon us.';
        expect(slice(str, 31)).toBe("the lazy dog.");
        expect(slice(str, 4,19)).toBe("quick brown fox");
        expect(slice(str1, 4,-2)).toBe("morning is upon u");
        expect(slice(str, -4)).toBe("dog.");
        expect(slice(str, -9, -5)).toBe("lazy");
        expect(slice("", -9, -5)).toBe("");
        expect(slice("", "", -5)).toBe("");
        expect(slice("abc", "", -5)).toBe("");
    })
});
describe("tests for the split function", () => {
    it("turns a String into an array of strings, by separating the string at each instance of a specified separator string.", () => {
        const str = 'The quick brown fox jumps over the lazy dog.';
        const words = split(str, " ");
        expect(words[3]).toBe("fox");
        expect(words).toStrictEqual(["The","quick","brown","fox","jumps","over","the","lazy","dog."]);
        expect(split("abcd", "a", 0)).toStrictEqual([]);
        const chars = split(str,'');
        expect(chars[8]).toBe("k");
        expect(chars).toStrictEqual(["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", "u", "m", "p", "s", " ", "o", "v", "e", "r", " ", "t", "h", "e", " ", "l", "a", "z", "y", " ", "d", "o", "g", "."]);
        const strCopy = split(str);
        expect(strCopy).toStrictEqual(["The quick brown fox jumps over the lazy dog."]);
        expect(split("")).toStrictEqual([""]);
        const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
        expect(split(monthString, ",")).toStrictEqual(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
        const myString = 'Hello World. How are you doing?';
        const splits = split(myString,' ', 3);
        expect(splits).toStrictEqual(["Hello", "World.", "How"]);
        const string = 'asdfghjkl';
        const strReverse = split(string,'').reverse().join('');
        expect(strReverse).toBe("lkjhgfdsa");
    })
});
describe("tests for the startsWith function", () => {
    const str1 = 'Saturday night plans';
    let str2 = 'To be, or not to be, that is the question.';
    it("determines whether a string begins with the characters of a specified string, returning true", () => {
        expect(startsWith(str1,"Sat")).toBe(true);
        expect(startsWith(str1,"Sat", - 20)).toBe(true);
        expect(startsWith(str2,'not to be', 10)).toBe(true);
        expect(startsWith(str2,'To be')).toBe(true);
        expect(startsWith(str2,'')).toBe(true);
        expect(startsWith(str2,' ', 2)).toBe(true);
        expect(startsWith(str1,'Saturday night plans')).toBe(true);
        expect(startsWith("",'')).toBe(true);
    });
    it("returns false if a string does not begin with the characters of a specified string", () => {
        expect(startsWith(str2,'not to be')).toBe(false);
        expect(startsWith(str1,'Sat', 3)).toBe(false);
    })
});
describe("tests for the substring function", () => {
    it("returns the part of the string between the start and end indexes, or to the end of the string", () => {
        const str = 'Mozilla';
        expect(substring(str, 1,3)).toBe("oz");
        expect(substring(str, 2)).toBe("zilla");
        expect(substring(str, 4,7)).toBe("lla");
        expect(substring(str, 7,4)).toBe("lla");
        expect(substring(str, 0,1)).toBe("M");
        expect(substring(str, 1,0)).toBe("M");
        expect(substring(str, 0,10)).toBe("Mozilla");
        expect(substring(str, NaN)).toBe("Mozilla");
        expect(substring(str, NaN, NaN)).toBe("");
        expect(substring(str, 0, 6)).toBe("Mozill");
        expect(substring(str, 4)).toBe("lla");
        expect(substring(str, 0, 7)).toBe("Mozilla");
        expect(substring(str, str.length - 4)).toBe("illa");
        expect(substring(str, str.length - 5)).toBe("zilla");
        expect(substring(str, -2, -5)).toBe("");
        expect(substring(str, -5, -2)).toBe("");
        expect(substring(str, -2,)).toBe("Mozilla");
        expect(substring("", -2,)).toBe("");
        expect(substring("", NaN,)).toBe("");
        expect(substring("", 0,)).toBe("");
        expect(substring("", 10,20)).toBe("");
    })
});
describe("tests for the trim function", () => {
    it("removes whitespace from both ends of a string", () => {
        const greeting = '   Hello world!   ';
        let orig = '   foo  ';
        expect(trim(greeting)).toBe("Hello world!");
        expect(greeting).toBe('   Hello world!   ');
        expect(trim(orig)).toBe('foo');
        expect(trim('foo    ')).toBe('foo');
        expect(trim('      ')).toBe('');
        expect(trim('1      1')).toBe('1      1');
        expect(trim(' 1      1 ')).toBe('1      1');
        expect(trim('    1  1      1')).toBe('1  1      1');
        expect(trim('          1')).toBe('1');
        expect(trim('')).toBe('');

    })
});
describe("tests for the trimStart function", () => {
    it("removes whitespace from the beginning of a string", () => {
        const greeting = '   Hello world!   ';
        let str = '   foo  ';
        expect(trimStart(greeting)).toBe("Hello world!   ");
        str = trimStart(str);
        expect(str.length).toBe(5);
        expect(str).toBe('foo  ');
        expect(trimStart("")).toBe('');
        expect(trimStart("     1")).toBe('1');
    })
});
describe("tests for the trimEnd function", () => {
    it("removes whitespace from the end of a string", () => {
        const greeting = '   Hello world!   ';
        let str = '   foo  ';
        expect(trimEnd(greeting)).toBe("   Hello world!");
        str = trimEnd(str);
        expect(str.length).toBe(6);
        expect(str).toBe('   foo');
        expect(trimEnd("")).toBe('');
        expect(trimEnd("1     ")).toBe('1');
    })
});



