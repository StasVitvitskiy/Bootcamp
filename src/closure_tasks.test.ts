import {rangeIterator} from "./closure_tasks"
describe("tests for the rangeIterator function", () => {
    it("returns numbers within a given range", () => {
        let nextFunc = rangeIterator(100);
        let nextResult = nextFunc();
        let i = 1;
        while(nextResult != undefined) {
            expect(nextResult).toBe(i);
            i++;
            nextResult = nextFunc();
        }
        expect(i).toBe(101);
    })
})
