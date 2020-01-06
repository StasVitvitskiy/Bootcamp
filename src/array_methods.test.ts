import {from, isIterable, isArrLike, of} from "./array_methods"

describe("tests for function from", function() {
    it("returns new array if passed argument is array like", () => {
        expect(from([1,2,3,4,5,6,7,8])).toStrictEqual([1,2,3,4,5,6,7,8]);
        expect(from({0:1,1:5, length:2})).toStrictEqual([1,5]);
        expect(from("string")).toStrictEqual(["s","t","r","i","n","g"]);
    });
    it("returns new array if passed argument is iterable",() => {
        expect(from(new Map([[1,"one"],[ 2,"two"]]))).toStrictEqual([[1,"one"],[2, "two"]]);
        expect(from(new Set([1,2,3,4,4,45,6,7,8]))).toStrictEqual([1,2,3,4,45,6,7,8]);
    });
    it("returns empty array", () => {
        expect(from([])).toStrictEqual([]);
        expect(from(new Map([]))).toStrictEqual([]);
        expect(from(new Set([]))).toStrictEqual([]);
        expect(from(1)).toStrictEqual([]);
        expect(from("")).toStrictEqual([]);
        expect(from(NaN)).toStrictEqual([]);
        expect(from(undefined)).toStrictEqual([]);
        expect(from({})).toStrictEqual([]);
        expect(from(Symbol(""))).toStrictEqual([]);
        expect(from(null)).toStrictEqual([]);
        expect(from(new Function())).toStrictEqual([]);
        expect(from(new Array())).toStrictEqual([]);
        expect(from(new String())).toStrictEqual([]);
        expect(from(new Number())).toStrictEqual([]);
    })
    it("maps (returns new value based on the old value) over passed values (checks that every element passes through the callback function (mapFn))",() => {
        const mapFn = (element, index, array) => {
            return element ** 3;
        };
        expect(from([1,2,3], mapFn)).toStrictEqual([1,8,27]);
        expect(from(new Set([1,2,3,1]), mapFn)).toStrictEqual([1,8,27]);
        expect(from({0:2, 1:5, length:2}, mapFn)).toStrictEqual([8,125]);
        expect(from("123", mapFn)).toStrictEqual([1,8,27]);
    })
});
describe("tests for isArrLike function", () => {
    it("returns true when the passed argument is an array like object",() => {
        expect(isArrLike([1,2,3,4,5])).toBe(true);
        expect(isArrLike([])).toBe(true);
        expect(isArrLike({0:1, 1:55,length:2})).toBe(true);
        expect(isArrLike(function(){})).toBe(true);
    })
    it("returns false when the passed argument is not an array like obj," +
        " meaning it does not have length property", () => {
        expect(isArrLike({})).toBe(false);
        expect(isArrLike({"one":1, "two":2})).toBe(false);
        expect(isArrLike(1)).toBe(false);
        expect(isArrLike(null)).toBe(false);
        expect(isArrLike(undefined)).toBe(false);
        expect(isArrLike(Symbol())).toBe(false);
    });
});
describe("tests for isIterable function", () => {
    it("returns true if the passed argument is iterable (anything that has Symbol.iterator field)",() => {
        expect(isIterable({[Symbol.iterator]: () => {}})).toBe(true);
        expect(isIterable("string")).toBe(true);
        expect(isIterable([3,4,5,6,7,8])).toBe(true);
        expect(isIterable(new Map())).toBe(true);
        expect(isIterable(new Set())).toBe(true);
    })
    it("returns false if the passed arg is not an iterable", () => {
        expect(isIterable({})).toBe(false);
        expect(isIterable(function(){})).toBe(false);
        expect(isIterable(1)).toBe(false);
        expect(isIterable(null)).toBe(false);
        expect(isIterable(undefined)).toBe(false);
        expect(isIterable(Symbol)).toBe(false);
    })
});
describe("tests for of function",() => {
    it("returns new array of elements that are passed as arguments", () => {
        expect(of(7)).toStrictEqual([7]);
        expect(of(1,2,3,4,5,6,7)).toStrictEqual([1,2,3,4,5,6,7]);
        expect(of()).toStrictEqual([]);
        expect(of("")).toStrictEqual([""]);
        expect(of(new Map())).toStrictEqual([new Map()]);
        expect(of(new Set())).toStrictEqual([new Set()]);
        expect(of([])).toStrictEqual([[]]);
        expect(of({})).toStrictEqual([{}]);
        expect(of(String)).toStrictEqual([String]);
        expect(of(Number)).toStrictEqual([Number]);
    })
})
