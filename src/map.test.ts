import {map} from "./map"

describe("tests for the array map function", function() {
    const array1 = [1, 4, 9, 16];
    it("doubles elements in the array", () => {
        expect(map(array1, x => x * 2)).toStrictEqual([2, 8, 18, 32]);
    });
    it("creates array with increasing values", function(){
        expect(map(array1, function(element, index, array1) {
            return index+1;
        } )).toStrictEqual([1,2,3,4]);
    });
    it("maps array [1,4,9,16] to [3,6,9,12]", function() {
        expect(map(array1, function(element, index, array1) {
            return (index+1)*3
        })).toStrictEqual([3,6,9,12]);
    });
    it("coverts number element into string elements using map function", function() {
        expect(map(array1, function(element, index, array1) {
            return String(element);
        })).toStrictEqual(["1","4","9","16"]);
    })
});
