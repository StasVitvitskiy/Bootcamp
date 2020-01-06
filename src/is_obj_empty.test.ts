import {isObjEmpty,isObjEmptyLooping} from "./is_obj_empty"
describe("tests for two functions that check if the object is empty", function() {
    it("returns false if the object is not empty", () => {
        expect(isObjEmpty({name: "John"})).toBe(false);
        expect(isObjEmptyLooping({name:"Hui"})).toBe(false);
    });
    it("returns true if the object is empty", () => {
        const emptyObj = {};
        expect(isObjEmpty(emptyObj)).toBe(true);
        expect(isObjEmptyLooping(emptyObj)).toBe(true);
    });
})
