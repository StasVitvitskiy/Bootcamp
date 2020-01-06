import {isArraySorted,correctOrder} from "./is_arr_sorted"

describe("tests for isArraySorted function", function() {
    it("returns false when array is not sorted", () => {
        expect(isArraySorted([3,2,4,5,6,7],true)).toBe(false);
        expect(isArraySorted([3,2,2,4,5,6,7],true)).toBe(false);
        expect(isArraySorted([2,2,4,5,6,7,1],true)).toBe(false);
        expect(isArraySorted([2,2,4,1,6,7],true)).toBe(false);
        expect(isArraySorted([1,2,3,4,5,6,7],false)).toBe(false);

        expect(isArraySorted([3,2,4,5,6,7],false)).toBe(false);
        expect(isArraySorted([3,2,2,4,5,6,7],false)).toBe(false);
        expect(isArraySorted([2,2,4,5,6,7,1],false)).toBe(false);
        expect(isArraySorted([2,2,4,1,6,7],false)).toBe(false);
        expect(isArraySorted([7,6,5,4,3,2,1],true)).toBe(false);
    });
    it("returns true when array is sorted", () => {
        const largeArr = new Array(10000).fill(0).map(function(element, index) {
            return index+1;
        });

        expect(isArraySorted(largeArr, true)).toBe(true);

        expect(isArraySorted([1,2,3,4,5,6,7],true)).toBe(true);
        expect(isArraySorted([8,7,6,5,4,3,2,1], false)).toBe(true);
        expect(isArraySorted([1,1,1,1], false)).toBe(true);
        expect(isArraySorted([8,1,1,-1], false)).toBe(true);
        expect(isArraySorted([-1,-2,-3,-4], false)).toBe(true);
        expect(isArraySorted([1,1,1,1], true)).toBe(true);
        expect(isArraySorted([-4,-3,-2,-1], true)).toBe(true);
    })
});
describe("tests for correctOrder function", function() {
    it("returns true, if the order selected is ascending", () => {
        expect(correctOrder(4,5, true)).toBe(true);
    });
    it("returns false if the order selected is descending", () => {
        expect(correctOrder(5,4,false)).toBe(true);
    })
})
