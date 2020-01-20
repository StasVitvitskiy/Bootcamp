import {getMaxSubSum} from "./array_tasks"
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
})
