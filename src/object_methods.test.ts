import {assign, entries, fromEntries,keys, values} from "./object_methods";
describe("tests for the assign function", () => {
    it("copies all enumerable own properties from one or more source objects to a target object", () => {
        const target = { a: 1, b: 2 };
        const source = { b: 4, c: 5 };
        const o1 = { a: 1 };
        const o2 = { b: 2 };
        const o3 = { c: 3 };
        expect(assign({a:1, b:2}, {a:30, b:45, c:3})).toStrictEqual({a:30, b:45, c:3});
        expect(assign(target,source)).toStrictEqual({a:1, b:4, c:5});
        expect(assign({}, {a:1})).toStrictEqual({a:1});
        expect(assign(o1,o2,o3)).toStrictEqual({ a: 1, b: 2, c: 3 });
        expect(assign({a: 1, b: 1, c: 1}, { b: 2, c: 2 }, { c: 3 })).toStrictEqual({ a: 1, b: 2, c: 3 });
        expect(assign({}, {})).toStrictEqual({});
        expect(assign({a:1}, {})).toStrictEqual({a:1});
    })
});
describe("tests for the entries function", () => {
    it("returns an array of a given object's own enumerable string-keyed property [key, value] pairs", () => {
        const object = {
            a: 'somestring',
            b: 42
        };
        const obj = { foo: 'bar', baz: 42 };
        const obj1 = { 0: 'a', 1: 'b', 2: 'c' };
        const anObj = { 100: 'a', 2: 'b', 7: 'c' };
        expect(entries(object)).toStrictEqual([["a", 'somestring'], ["b", 42]]);
        expect(entries(obj)).toStrictEqual([ ['foo', 'bar'], ['baz', 42] ]);
        expect(entries(obj1)).toStrictEqual([ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]);
        expect(entries(anObj)).toStrictEqual([ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]);

        expect(entries({})).toStrictEqual([]);
        expect(entries({ one: {1:1}})).toStrictEqual([["one", {"1":1}]]);
    })
});
describe("tests for the fromEntries function", () => {
    it("transforms a list of key-value pairs into an object", () => {
        const entries = new Map<string, string | number>([
            ['foo', 'bar'],
            ['baz', 42]
        ]);
        const map = new Map<string, string | number>([ ['foo', 'bar'], ['baz', 42] ]);
        const notIterable = 3;
        expect(fromEntries(entries)).toStrictEqual({ foo: "bar", baz: 42 });
        expect(fromEntries(map)).toStrictEqual({ foo: "bar", baz: 42 });
        expect(function() {
            fromEntries(notIterable);
        }).toThrow(new TypeError("Object has to be iterable"));
        expect(function() {
            fromEntries(null)
        }).toThrow(new TypeError("Object has to be iterable"));
        expect(fromEntries("string")).toStrictEqual({
            s:undefined,
            t:undefined,
            r:undefined,
            i:undefined,
            n:undefined,
            g:undefined
        });
        expect(function(){
            fromEntries(true)
        }).toThrow(new TypeError("Object has to be iterable"));
        expect(function(){
            fromEntries(undefined)
        }).toThrow(new TypeError("Object has to be iterable"));
        expect(function(){
            fromEntries(Symbol)
        }).toThrow(new TypeError("Object has to be iterable"));
    })
});
describe("tests for the keys function", () => {
    it("returns an array of a given object's own enumerable property names", () => {
        const object1 = {
            a: 'somestring',
            b: 42,
            c: false
        };
        const arr = ['a', 'b', 'c'];
        const obj = { 0: 'a', 1: 'b', 2: 'c' };
        const anObj = { 100: 'a', 2: 'b', 7: 'c' };
        expect(keys(object1)).toStrictEqual(["a","b","c"]);
        expect(keys(arr)).toStrictEqual(["0","1","2"]);
        expect(keys({})).toStrictEqual([]);
        expect(keys(obj)).toStrictEqual(["0","1","2"]);
        expect(keys(anObj)).toStrictEqual(["2","7","100"]);
        expect(keys("foo")).toStrictEqual(["0","1","2"]);
    })
});
describe("tests for the values function", () => {
    it("returns an array of a given object's own enumerable property values", () => {
        const object1 = {
            a: 'somestring',
            b: 42,
            c: false
        };
        const obj = { foo: 'bar', baz: 42 };
        const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
        const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
        expect(values(object1)).toStrictEqual(["somestring", 42, false]);
        expect(values(obj)).toStrictEqual(['bar', 42]);
        expect(values(arrayLikeObj1)).toStrictEqual(['a', 'b', 'c']);
        expect(values(arrayLikeObj2)).toStrictEqual(['b', 'c', 'a']);
        expect(values({})).toStrictEqual([]);
        expect(values([])).toStrictEqual([]);
        expect(values("str")).toStrictEqual(["s","t","r"]);
        expect(values(7)).toStrictEqual([]);
        expect(values(null)).toStrictEqual([]);
        expect(values([1,2,3])).toStrictEqual([1,2,3]);
        expect(values([Symbol.iterator])).toStrictEqual([Symbol.iterator]);
        let func = function() {};
        expect(values({0:func})).toStrictEqual([func]);
        expect(values([func])).toStrictEqual([func]);
    })
})
