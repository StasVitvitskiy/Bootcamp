import {getMaxSubSum, filterRangeInPlace, Calculator, shuffle,unique,range,createIterable,
    makeIterable, iterableFrom,iterablFromWithMap} from "./array_tasks"
describe("tests for the getMaxSubSum function", () => {
    it("returns the max sum in the sub array", () => {
        expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
        expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6);
        expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
        expect(getMaxSubSum([-2, -1, 1, 2])).toBe(3);
        expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100);
        expect(getMaxSubSum([1, 2, 3])).toBe(6);
        expect(getMaxSubSum([-1, -2, -3])).toBe(0);
        expect(getMaxSubSum([])).toBe(0);
    })
});

describe("filterRangeInPlace", function() {

    it("returns the filtered values", function() {

        let arr = [5, 3, 8, 1];

        filterRangeInPlace(arr, 1, 4);

        expect(arr) .toStrictEqual([3, 1]);
    });
    it("doesn't return anything", function() {
        expect(filterRangeInPlace([1,2,3], 1, 4)).toBeUndefined();
    });
});
describe("tests for the Calculator object", () => {
    it("returns the sum of two operands", () => {
        let calculator = new Calculator;
        expect(calculator.calculate("3 + 3")).toBe(6);
    });
    it("returns the result of subtraction of the 2 operands", () => {
        let calc = new Calculator();
        expect(calc.calculate("10 - 5")).toBe(5);
    });
    it("adds an operator", () => {
        let powerCalc = new Calculator;
        powerCalc.addMethod("*", (a, b) => a * b);
        powerCalc.addMethod("/", (a, b) => a / b);
        powerCalc.addMethod("**", (a, b) => a ** b);

        expect(powerCalc.calculate("2 ** 3")).toBe(8);
        expect(powerCalc.calculate("4 / 2")).toBe(2);
        expect(powerCalc.calculate("4 * 2")).toBe(8);
    })
});
describe("tests for the shuffle function", () => {
    const hasDuplicates = (arr1, arr2) => {
        return arr1.some((el, i) => {
            return el === arr2[i];
        })
    };

    it("returns true if there are no permutations in the array", () => {
        let array = [1,2,3];
        shuffle(array);
        expect(array).toStrictEqual([1, 2, 3]);
    });
    it("check if it shufles the array", () => {
        let array = [1,2,3,4,5,6,7,8,9,10];
        let shuffled = shuffle(array);
        expect(hasDuplicates(shuffled, array)).toBe(false);
    });
    it("checks for duplicates in the array", () => {
        expect(hasDuplicates([1,2,3], [1,2,3])).toBe(true);
        expect(hasDuplicates([1,2,3], [3,1,2])).toBe(false);
        expect(hasDuplicates([], [])).toBe(false);
        expect(hasDuplicates([1], [])).toBe(false);
        expect(hasDuplicates([1], [1])).toBe(true);
        expect(hasDuplicates([1,2,3], [3,2,1])).toBe(true);
    });
    it("does not shuffle", () => {
        expect(shuffle([])).toStrictEqual([]);
        expect(shuffle([1])).toStrictEqual([1]);
    });
    it("swaps the elements when the length is 2", () => {
        expect(shuffle([1,2])).toStrictEqual([2,1]);
    })
});
describe("unique", function() {
    it("removes non-unique elements", function() {
        let strings = ["Hare", "Krishna", "Hare", "Krishna",
            "Krishna", "Krishna", "Hare", "Hare", ":-O"
        ];

        expect(unique(strings)).toStrictEqual(["Hare", "Krishna", ":-O"]);
    });

    it("does not change the source array", function() {
        let strings = ["Krishna", "Krishna", "Hare", "Hare"];
        unique(strings);
        expect(strings).toStrictEqual(["Krishna", "Krishna", "Hare", "Hare"]);
    });
});
describe("tests for the range function", () => {
    it("returns iterable object", () => {
        let i = 1;
        for(let num of range(1,10)) {
            expect(num).toStrictEqual(i++);
        }
        for(let num of range(1,-3)) {
            throw new Error("unexpected iteration");
        }

    })
});
describe("tests for the createIterable function", () => {
    it("iterates all values", () => {
        let array = [
            "a",
            "b",
            "c",
            "d",
            "e",
            1,
            2,
            3,
            4,
            "f",
            null,
            undefined,
            function() {},
            Symbol("id")
        ]
        let iterable = createIterable(...array);
        let i = 0;
        for(let value of iterable) {
            expect(value).toStrictEqual(array[i++]);
        }
        expect(i).toBe(array.length);
    });
    it("does not iterate empty object", () => {
        let empty = createIterable();
        for(let value of empty) {
            expect(value).toBe(0);
            throw new Error("unexpected iteration");
        }
    })
});
describe("tests for the makeIterable function", () => {
    it("makes the object iterable", () => {
        let obj = {a:1, c: "d"};
        let iterableObj = makeIterable(obj);
        let keys = Object.keys(obj);
        let index = 0;
        for(let value of iterableObj) {
            expect(value).toStrictEqual(obj[keys[index++]]);
        }
        expect(index).toBe(2);
    });
    it("does not work with the empty obj", () => {
        let empty = {};
        let emptyObj = makeIterable(empty);
        for(let value of emptyObj) {
            throw new Error("unexpected iteration");
        }
    })
});
describe("tests for the iterableFrom function" ,() => {
    it("returns new array from iterable", () => {
        let iterable = "String";
        let array = iterableFrom(iterable);
        expect(array).toStrictEqual(["S","t","r","i","n","g"]);
        expect(Array.from(iterable)).toStrictEqual(array);
    })

});
describe("tests for the iterableFromWithMap function", () => {
    it("returns new array from iterable and calls map func for every element", () => {
        let array = [1,2,3,4,5];
        let result = iterablFromWithMap(array, (el) => el **2);
        expect(result).toStrictEqual([1,4,9,16,25]);
    })
})

