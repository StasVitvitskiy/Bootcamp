import {from, isIterable, isArrLike, of, concat, copyWithin, every,fill,filter,find, findIndex,
    flat, flatMap, forEach,includes,indexOf, join,
    joinConvertToString,lastIndexOf, map, pop,push,reduce} from "./array_methods"

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
});
describe("tests for the concat function", () => {
    it("returns new array when the passed argument two arrays", () => {
        expect(concat([1,2,3,4,5], [6,7,8,9])).toStrictEqual([1,2,3,4,5,6,7,8,9]);
    });
    it("returns new array when the passed argument is not an array", () => {
        expect(concat([1],2,3,4)).toStrictEqual([1,2,3,4]);
    });
    it("returns new array when only the first argument is passed", () => {
        expect(concat([1,2,3,4,5,6,7])).toStrictEqual([1,2,3,4,5,6,7]);
        expect(concat([])).toStrictEqual([]);
    })
    it("returns new array when the passed argument/s is a set of arrays/empty arrays", () => {
        expect(concat([1,2,3],[],[4,5,6])).toStrictEqual([1,2,3,4,5,6]);
        expect(concat([],[],[])).toStrictEqual([]);
    });
    it("returns new array with a mixed set of arguments" , () => {
        const func = function() {};
        const symbol = Symbol();
        expect(concat([1,2,3],4,[],[5,6,7],"8",{},null,undefined,symbol,func, "9,10")).
        toStrictEqual([1,2,3,4,5,6,7,"8",{},null,undefined,symbol,func,"9,10"]);
    })
});
describe("tests for the copyWithin function", () => {
    const testArray = ['a', 'b', 'c', 'd', 'e'];
    it("returns modified array", () => {
        const array = testArray.slice();
        expect(copyWithin(array, 0, 3,4)).toStrictEqual(["d", "b", "c", "d", "e"]);
        expect(copyWithin(array, 1,3)).toStrictEqual(["d", "d", "e", "d", "e"]);
    })
    it("return modified array when the start position is negative", () => {
        const array = testArray.slice();
        expect(copyWithin(array, 0, -2)).toStrictEqual(["d","e","c","d","e"]);
        expect(copyWithin(array, 0, -1)).toStrictEqual(["e","e","c","d","e"]);
        expect(copyWithin(array, 0, -3, -2)).toStrictEqual(["c","e","c","d","e"]);
    });
    it("returns modified array when the end position is negative", () => {
        const array = testArray.slice();
        expect(copyWithin(array, 1, 2, -2)).toStrictEqual(["a","c","c","d","e"]);
    });
    it("returns modified array when start && end are not passed", () => {
        let array = testArray.slice();
        expect(copyWithin(array, 1)).toStrictEqual(["a","a","a","a","a"]);
        array = testArray.slice();
        expect(copyWithin(array, 2)).toStrictEqual(["a","b","a","b","a"]);
    })
});
describe("tests for every function", () => {
    it("returns true if the passed argument fits the condition of the callback function", () => {
        expect(every([1,2,3,4], function(el) {
            return el <= 4;
        })).toBe(true);
        expect(every([2,4,6,8,10], function(el) {
            return el % 2 == 0 ;
        })).toBe(true);
        expect(every(["2","3","a","c"], function(el) {
            return typeof el == "string";
        })).toBe(true);
        expect(every([1,2,3,4,5], function(el) {
            return typeof el == "number";
        })).toBe(true);
        expect(every([function(){}, function(){}], function(el) {
            return typeof el == "function";
        })).toBe(true);
        expect(every([Symbol(),Symbol()], function(el) {
            return typeof el == "symbol";
        })).toBe(true);
        expect(every([function(){},""[Symbol.iterator]], function(el) { // мог бы написать [][Symbol.iterator] или (new Map)[Symbol.iterator]
            return typeof el == "function";
        })).toBe(true);
    });
    it("returns false if the passed argument does not fit the condition of the callback function",() => {
        expect(every([1,2,3,4,5], function(el) {
            return el > 10;
        })).toBe(false);
        expect(every([2,3,4,5,6,7], function(el) {
            return el % 2 == 0;
        })).toBe(false);
    })
});
describe("tests for the fill function", () => {
    it("returns modified array", () => {
        expect(fill([1,2,3,4,5,6,7,8], 33, 0,8)).toStrictEqual([33,33,33,33,33,33,33,33]);
    });
    it("returns modified array", () => {
        const func = function(){}
        expect(fill([1,2,3,4,5,6,7,8], func, 3,8)).toStrictEqual([1,2,3,func,func,func,func,func]);
    })
    it("returns modified array when the starting position is not passed", () => {
        expect(fill([1,2,3,4], 8, undefined, 4)).toStrictEqual([8,8,8,8]);
    });
    it("returns modified array when the end position is not passed", () => {
        expect(fill([1,2,3,4], 8, 0)).toStrictEqual([8,8,8,8]);
    });
    it("returns modified array when both of the start/end positions are not passed", () => {
        expect(fill([1,2,3,4], 8)).toStrictEqual([8,8,8,8]);
    })
})
describe("tests for filter function", () => {
    it("returns new array with the values that passed the callback's test", () => {
        expect(filter([1,2,3,"str", 5,6,7], function(el) {
            return typeof el == "string";
        })).toStrictEqual(["str"]);
        expect(filter([1,2,3,"str", 5,6,7], function(el) {
            return el > 10
        })).toStrictEqual([]);
        expect(filter([1,2,3,"str", 5,6,7], function(el) {
            return el % 2 == 0;
        })).toStrictEqual([2,6]);
    })
});
describe("tests for find function", () => {
    it("returns a value that satisfies the given condition by the callback function", () => {
        const func = function(){};
        expect(find([1,2,3,4,5,6,7,8,9,"find", func], function(el) {
            return el == 9
        })).toBe(9);
        expect(find([{0:"zero"},{name:"John"},String,Array], function(el) {
            return el[0] == "zero"
        })).toStrictEqual({0:"zero"});
        expect(find([{0:"zero"},{name:"John"},String,Array], function(el) {
            return el.name == "John"
        })).toStrictEqual({name: "John"});
        expect(find([{0:"zero"},{name:"John"},"",[]], function(el) {
            return typeof el[Symbol.iterator] == "function"
        })).toStrictEqual("");
    });

    it("returns undefined if the value is not found ", () => {
        expect(find([{0:"zero"},{name:"John"},"",[]], function(el) {
            return el == 9;
        })).toStrictEqual(undefined);
    })
});
describe("tests for the findIndex function", () => {
    it("returns the index of an element that passed the callback's test", () => {
        expect(findIndex([1,2,3,4,5,6,7,8], function (el) {
            return el == 4;
        })).toBe(3);
        expect(findIndex([{name:"Lee"}, {0: "price"}, [1,2,3,4], "str", 9], function (el) {
            return el[0] == "price";
        })).toBe(1);
    })
    it("returns -1 when the passed value did not pass the callback's test", () => {
        expect(findIndex([1,2,3,4,5,6,7,8], function(el) {
            return el > 10;
        })).toBe(-1);
    })
});
describe("tests for the flat function", () => {
    it("returns flat array when depth is 1 and the passed array is double nested", () => {
        expect(flat([1,2,3,4,[5,6,7]], 1)).toStrictEqual([1,2,3,4,5,6,7]);
    });
    it("returns flat array, when the depth argument is not specified", () => {
        expect(flat([1,2,3,4,5,6,7,8,[9,10]])).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
    });
    it("returns flattened array, when the depth argument is greater than 1", () => {
        expect(flat([1, 2, [3, 4, [5, 6]]])).toStrictEqual([1, 2, 3, 4, [5, 6]]);
        expect(flat([1, 2, [3, 4, [5, 6]]],2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
        expect(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("returns passed array if the depth = 0", () => {
        expect(flat([1,2,3,4,5,6],0)).toStrictEqual([1,2,3,4,5,6]);
    });
    it("returns empty array when the passed array is empty", () => {
        expect(flat([])).toStrictEqual([]);
    })
});
describe("tests for the flatMap function", () => {
    it("removes all the negative numbers and split the odd numbers into an even number and a 1",() => {
        const a = [5, 4, -3, 20, 17, -33, -4, 18];
        expect(flatMap(a, function(el) {
            if(el < 0) {
                return [];
            } else if(el % 2 == 0) {
                return [el];
            } else {
                return [el-1,1];
            }
        })).toStrictEqual([4, 1, 4, 20, 16, 1, 18]);
    })
    it("doubles array elements", () => {
        const arr = [1,2,3,4];
        expect(flatMap(arr, (el) => {
            return [[el*2]];
        })).toStrictEqual([[2], [4], [6], [8]]);
    });
    it("generates a list of words from a list of sentences", () => {
        const arr = ["it's Sunny in", "", "California"];
        expect(flatMap(arr, (el) => {
            return el.split(" ");
        })).toStrictEqual(["it's","Sunny","in", "", "California"]);
    });
    it("flat maps array of mixed values", () => {
        const arr = [1,2,3,[4,5,6],["str"], 7];
        expect(flatMap(arr, (el) => {
            return typeof el == "number"? el * 2 : [];
        })).toStrictEqual([2,4,6,14]);
    })
});
describe("tests for the forEach function", () => {
    it("executes a provided function once for each array element", () => {
        const name = ["S","t","a","s"];
        expect(forEach(name, (el,i) => {
            expect(el == name[i]).toBe(true);
        })).toBe(undefined);
    })
});
describe("tests for includes function", () => {
    it("returns true if the passed value is amongst the values in the array", () => {
        const emptyArr = [];
        const array = [1, 2, 3];
        const pets = ['cat', 'dog', 'bat'];
        expect(includes([1,2,3,4,5,6,7,8,9], 3, 0)).toBe(true);
        expect(includes(array,2)).toBe(true);
        expect(includes(pets,'cat')).toBe(true);
        expect(includes([1,2,3,4,5,6,7,8,"string"], "string" , 3)).toBe(true);
        expect(includes([1,2,3,4,5,6,7,8,"string", [1,2,3], emptyArr], emptyArr , 8)).toBe(true);
    })
    it("returns false if the passed value is not amongst the value in the array", () => {
        const pets = ['cat', 'dog', 'bat'];
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        expect(includes(pets, 'at')).toBe(false);
        expect(includes(numbers, 33)).toBe(false);
        expect(includes(pets, 'CAT')).toBe(false);
    })
});
describe("tests for the indexOf function", () => {
    it("returns the first index at which a given element was found in the array", () => {
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
        expect(indexOf(beasts, 'bison')).toBe(1);
        expect(indexOf(beasts, 'bison', 2)).toBe(4);
        expect(indexOf(beasts, 'bison', 1)).toBe(1);
        expect(indexOf(beasts, 'bison', -1)).toBe(4);
    })
    it("returns -1 if the given element can not be found in the array", () => {
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
        expect(indexOf(beasts, 'Ant')).toBe(-1);
        expect(indexOf(beasts, 'ant',1)).toBe(-1);
        expect(indexOf(beasts, 'ant',-3)).toBe(-1);
    })
});
describe("tests for the join function", () => {
    it("joins elements with different separators(comma by default)", () => {
        const elements = ['Fire', 'Air', 'Water'];
        expect(join(elements)).toStrictEqual("Fire,Air,Water");
        expect(join(elements,"")).toStrictEqual("FireAirWater");
        expect(join(elements,"-")).toStrictEqual("Fire-Air-Water");
        expect(join(['Fire',[], 'Air', 'Water', null, undefined, []],"-")).toStrictEqual("Fire--Air-Water---");
    })
    it("returns single element without a separator", () => {
        expect(join([1], ",,,,,,,")).toBe("1");
    })
    it("converts separator to a string", () => {
        expect(join([1,2,3,4], 1)).toBe("1121314");
    })
    it("returns empty string", () => {
        expect(join([])).toBe("")
    });
    it("joins array-like object", () => {
        expect(join({0:1, 1:2, length:2}, "<->")).toBe("1<->2");
    })
});
describe("tests for the lastIndexOf function", () => {
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
    it("returns the last index at which a given element is found in the array", () => {
        expect(lastIndexOf(animals, 'Dodo')).toBe(3);
        expect(lastIndexOf(animals, 'Tiger')).toBe(1);
    });
    it("returns the last index of an element when start is greater than array length", () => {
        expect(lastIndexOf(animals, 'Dodo', 10)).toBe(3);
    });
    it("returns -1 if the element was not found", () => {
        expect(lastIndexOf(animals, 'Elephant', 4)).toBe(-1);
    });
    it("returns index of the element even if the start index is negative", () => {
        expect(lastIndexOf(animals, 'Tiger', -3)).toBe(1);
        expect(lastIndexOf(animals, 'Tiger', -4)).toBe(-1);
    })
});
describe("tests for the map function", () => {
    const array = [1, 4, 9, 16];
    it("creates a new array populated with the results of calling a provided function on every element in the calling array", () => {
        expect(map(array, function(el) {
            return el*2;
        })) .toStrictEqual([2,8,18,32]);
    });
    it("returns empty array if the passed array is empty", () => {
        expect(map([], function(el) {
            return el;
        })).toStrictEqual([]);
    })
});
describe("tests for the pop function", () => {
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    it("deletes the last element from the passed array and returns it", () => {
        const plantsCopy = plants.slice();
        expect(pop(plantsCopy)).toStrictEqual('tomato');
    });
    it("when pop deletes the last element it also modifies array length", () => {
        const plantsCopy = plants.slice();
        pop(plantsCopy);
        expect(plantsCopy.length).toBe(4);
    });
    it("returns undefined when empty array is passed", () => {
        expect(pop([])).toBe(undefined);
    });
    it("correctly deletes all the elements if pop is used in a loop", () => {
        const plantsCopy = plants.slice();
        for(let i = plantsCopy.length; i >= 0; i--) {
            pop(plantsCopy);
        }
        expect(plantsCopy.length).toBe(0)
    });
    it("correctly works with array with only one element", () => {
        const array = [1];
        pop(array);
        expect(array.length).toBe(0)
    })
});
describe("tests for the push method", () => {
    const animals = ['pigs', 'goats', 'sheep'];
    it("pushes one or more elements to the end of an array", () => {
        const animalsCopy = animals.slice();
        expect(push(animalsCopy, 'cows')).toStrictEqual(4);
        expect(push(animalsCopy, 'chickens', 'cats', 'dogs')).toStrictEqual(7);
        expect(animalsCopy).toStrictEqual(["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]);
        expect(push([],"pigs")).toStrictEqual(1);
    });
});
describe("tests for the reduce function", () => {
    it("returns a single value as a result of reducing the array", () => {
        expect(reduce([ { x: 22 }, { x: 42 } ], (acc, cur ) => {
           return Math.max( acc.x, cur.x );
        })).toBe(42);
        expect(reduce([{ x: 22 }], (max, cur) => {
            return Math.max(max, cur);
        })).toStrictEqual({x: 22});
    });
    it("throws TypeError when calling on an empty array without an initial value", () => {
        expect(() => reduce([], (acc, cur) => {
            return Math.max(acc.x, cur.x);
        })).toThrow(TypeError);
    });
    it("works for empty or larger arrays", () => {
        const array = [ { x: 22 }, { x: 42 } ].map( el => el.x );
        expect(reduce(array, (max, cur) => {
            return Math.max( max, cur );
        }, -Infinity)).toBe(42);
    });
    it("returns the initial value when array length is 0", () => {
        expect(reduce([], (acc, cur) => {
            return acc + cur;
        }, 10)).toBe(10);
    });
    it("returns a single value as a result of reducing the array with more than 2 elements", () => {
        expect(reduce([{ x: 22 }, { x: 42 }, {x: 55}, {x: 33},{x: 12}], (acc, cur) => {
            return acc + cur.x;
        }, 0)).toBe(164)
    });
    it("converts array into an array like object", () => {
        const animals = ['pigs', 'goats', 'sheep'];
      expect(reduce(animals, (acc, cur, index) => {
          acc[index] = cur;
          acc.length = index+1;
          return acc;
      },{})).toStrictEqual({0:'pigs',1:'goats', 2: 'sheep', length: 3});
    });
    it("returns max or min depending on the condition", () => {
        expect(reduce([1,2,3,4,5,6,7,8,33,22,15,77,93], (acc, cur) => {
            return Math.max(acc, cur);
        })).toBe(93);
        expect(reduce([111,22,3,43,51,16,27,38,33,22,15,77,93], (acc, cur) => {
            return Math.min(acc, cur);
        })).toBe(3);
        const arr = [231,24,433,24,25,36,47,48,33,24,12,77,93];
        expect(Object.keys(reduce(arr, (acc, cur) => {
            acc[cur] = 1;
            return acc;
        }, {})).map(function(el) {
            return +el;
        })).toStrictEqual([12,24,25,33,36,47,48,77,93,231,433]);
    })
    it("reduces array to a string", () => {
        const words = ["a-2", "b-3", "c-4"];
        expect(reduce(words, (acc, cur) => {
                const parts = cur.split("-");
                const repeats = +parts[1];
                if(acc != "") {
                    acc += " ";
                }
                for(let i = 0; i <= repeats; i++) {
                    acc = acc + parts[0];
                }
                return acc;
            },"")

        ).toBe("aaa bbbb ccccc")
    });
    it("deletes all negative and odd elements", () => {
        const array = [1,2,3,4,-2,333,244,145,-55,66,-77,99,124];
        expect(reduce(array, (acc, cur) => {
            if(cur > 0 && cur % 2 == 0) {
                acc.push(cur);
            }
            return acc;
        }, [])).toStrictEqual([2,4,244,66,124]);
    });
    it("merges array of objects into one", () => {
        const arrayOfObjects = [
            {one:1},
            {age:25,name: 'John'},
            {height:6, weight: 185},
            {four:4},
            {five:5},
            {six:6, badNumber: 666},
            {seven:7}];
        expect(reduce(arrayOfObjects, (acc, cur) => {
            for(let i in cur) {
                acc[i] = cur[i];
            }
            return acc;
        }, {})).toStrictEqual(
            {one:1,age:25,
            name: 'John',
            height:6,
            weight: 185,
            four:4,
            five:5,
            six:6,
            badNumber: 666,
            seven:7});
    })
    it("reverses array", () => {
        const array = [9,8,7,6,5,4,3,2,1];
        expect(reduce(array, (acc, cur) => {
            acc.unshift(cur);
            return acc;
        }, [])).toStrictEqual([1,2,3,4,5,6,7,8,9]);
    })
    it("reverses string array", () => {
        const arrayOfStrings = ["cat", "bat", "sheep"];
        expect(reduce(arrayOfStrings, (acc, cur) => {
            let reversed = "";
            for(let i = 0; i < cur.length; i++) {
                reversed = cur[i] + reversed;
            }
            acc.unshift(reversed);
            return acc;
        }, [])).toStrictEqual(["peehs", "tab", "tac"]);
    })
})


