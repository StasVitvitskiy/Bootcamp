import {sumTo, recurSum, formulaSum,factorialRecur,factorialLoop,fibonachi,fibonachiLoop,traverseList,
    traverseListInReverseRecur} from "./recursive_tasks"
describe("tests for the recursive_tasks functions", () => {
    it("returns the sum of all the numbers in the arithmetic sequence(a sequence of numbers which differ from each other by a common difference) using looping", () => {
        expect(sumTo(4)).toBe(10);
    });
    it("returns the sum of all of the numbers in the arithmetic sequence recursively", () => {
        expect(recurSum(4)).toBe(10);
    });
    it("returns the sum of all of the numbers in the arithmetic sequence using the formula for arithmetic progression", () => {
        expect(formulaSum(4)).toBe(10);
    });
    it("recursively returns factorial of the passed number", () => {
        expect(factorialRecur(4)).toBe(24);
    });
    it("returns the factorial of the passed number using looping", () => {
        expect(factorialLoop(4)).toBe(24);
    });
    it("recursively returns the fibonachi for the number", () => {
        expect(fibonachi(7)).toBe(13);
    });
    it("returns the fibonachi for the number using looping", () => {
        expect(fibonachiLoop(7)).toBe(13);
    })
});
describe("tests for the traverseList function", () => {
    it("traverses the list", () => {
        let list = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null
                    }
                }
            }
        };
        let sum = 0;
        traverseList(list, (element) => {
            return sum += element;
        })
        expect(sum).toBe(10);
    });
    it("traverses the list backwards recursively", () => {
        let list = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null
                    }
                }
            }
        };
        let result = [];
        traverseListInReverseRecur(list, (element) => {
            result.push(element);
        });
        expect(result).toStrictEqual([4,3,2,1]);
    })
})
